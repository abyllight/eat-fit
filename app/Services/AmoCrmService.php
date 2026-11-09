<?php
namespace App\Services;

use App\Models\User;
use Illuminate\Support\Facades\Http;
use Illuminate\Http\Client\ConnectionException;   // + добавлено
use GuzzleHttp\Exception\ConnectException;        // + добавлено
use Illuminate\Support\Facades\Log;               // + добавлено

class AmoCrmService
{
    const COURIER_NAME_FIELD  = 489497; // ТТМ (имя)
    const COURIER_PHONE_FIELD = 489499; // ТТМ (номер телефона)

    public $baseUrl;
    public $accessToken;

    public function __construct()
    {
        $this->baseUrl     = rtrim(env('AMOCRM_BASE_URL'), '/'); // например https://eatandfitkz.amocrm.ru
        $this->accessToken = env('AMO_ADMIN_LONG_TOKEN'); // твой access token
    }

    /**
     * Получить сделки по статусу и воронке.
     *
     * @param int $pipelineId ID воронки
     * @param int $statusId ID статуса
     * @param int $limit Сколько сделок всего нужно (макс 250 за запрос)
     * @return array
     */
    public function getLeadsByStatus(int $pipelineId, int $statusId, int $limit = 250): array
    {
        $perPage = 250; // лимит amoCRM
        $page    = 1;
        $leads   = [];
        while (count($leads) < $limit) {
            // + добавлено: ловим сетевые сбои, чтобы отличить их от «сделок нет»
            try {
                $response = Http::withOptions([
                    'connect_timeout' => 5,
                    'timeout'         => 20,
                ])->withHeaders([
                    'Authorization' => 'Bearer ' . $this->accessToken,
                    'Content-Type'  => 'application/json',
                ])->get($this->baseUrl . '/api/v4/leads', [
                    'limit' => $perPage,
                    'page'  => $page,
                    'filter[statuses][0][pipeline_id]' => $pipelineId,
                    'filter[statuses][0][status_id]'   => $statusId,
                ]);
            } catch (ConnectionException $e) {
                $reason = $this->describeNetworkFailure($e);

                Log::error('amoCRM: сетевой сбой', [
                    'page'      => $page,
                    'diagnosis' => $reason,
                    'message'   => $e->getMessage(),
                ]);

                throw new \RuntimeException('amoCRM недоступна: ' . $reason, 503, $e);
            }
            // + добавлено: не-2xx ответ — это ошибка, а не пустой список
            if (! $response->successful()) {
                Log::error('amoCRM: запрос завершился ошибкой', [
                    'page'   => $page,
                    'status' => $response->status(),
                    'body'   => mb_substr($response->body(), 0, 500),
                ]);

                throw new \RuntimeException('amoCRM вернула HTTP ' . $response->status(), $response->status());
            }

            $data = $response->json()['_embedded']['leads'] ?? [];
            if (empty($data)) {
                break; // сделок больше нет
            }
            $leads = array_merge($leads, $data);
            $page++;
        }
        return array_slice($leads, 0, $limit);
    }

    /**
     * Записать в сделку курьера (ТТМ): имя и телефон. null — очистить оба поля.
     *
     * @param int $leadId ID сделки (orders.amo_id)
     * @param User|null $courier
     * @return bool
     */
    public function setLeadCourier(int $leadId, ?User $courier): bool
    {
        return $this->updateLeadFields($leadId, [
            self::COURIER_NAME_FIELD  => $courier ? $courier->name : null,
            self::COURIER_PHONE_FIELD => $courier ? $courier->phone : null,
        ]);
    }

    /**
     * Обновить текстовые поля сделки: [field_id => value]. Пустое значение очищает поле.
     * В отличие от getLeadsByStatus, ошибку не пробрасываем: пишем в лог и возвращаем false,
     * чтобы сбой amoCRM не ломал операцию в CRM (например, назначение курьера).
     *
     * @param int $leadId ID сделки
     * @param array $fields [field_id => value]
     * @return bool
     */
    public function updateLeadFields(int $leadId, array $fields): bool
    {
        $values = [];

        foreach ($fields as $fieldId => $value) {
            $values[] = [
                'field_id' => $fieldId,
                'values'   => $value === null || $value === '' ? null : [['value' => (string) $value]],
            ];
        }

        try {
            $response = Http::withOptions([
                'connect_timeout' => 5,
                'timeout'         => 10,
            ])->withHeaders([
                'Authorization' => 'Bearer ' . $this->accessToken,
                'Content-Type'  => 'application/json',
            ])->patch($this->baseUrl . '/api/v4/leads/' . $leadId, [
                'custom_fields_values' => $values,
            ]);
        } catch (ConnectionException $e) {
            Log::error('amoCRM: сетевой сбой при обновлении сделки', [
                'lead_id'   => $leadId,
                'diagnosis' => $this->describeNetworkFailure($e),
                'message'   => $e->getMessage(),
            ]);

            return false;
        } catch (\Throwable $e) {
            Log::error('amoCRM: сбой при обновлении сделки', [
                'lead_id' => $leadId,
                'message' => $e->getMessage(),
            ]);

            return false;
        }

        if (! $response->successful()) {
            Log::error('amoCRM: обновление сделки завершилось ошибкой', [
                'lead_id' => $leadId,
                'status'  => $response->status(),
                'body'    => mb_substr($response->body(), 0, 500),
            ]);

            return false;
        }

        return true;
    }

    /**
     * + добавлено
     * Проверка связи с amoCRM. Можно вызвать из /health или из планировщика.
     *
     * @return array
     */
    public function checkConnectivity(): array
    {
        $host  = parse_url($this->baseUrl, PHP_URL_HOST);
        $start = microtime(true);

        $result = [
            'host'        => $host,
            'resolved_to' => array_column(@dns_get_record($host, DNS_A) ?: [], 'ip'),
            'reachable'   => false,
            'status'      => null,
            'latency_ms'  => null,
            'error'       => null,
        ];

        try {
            $response = Http::withOptions([
                'connect_timeout' => 5,
                'timeout'         => 10,
            ])->head($this->baseUrl . '/');

            $result['reachable'] = true;
            $result['status']    = $response->status(); // 401 здесь — это норма, связь есть
        } catch (ConnectionException $e) {
            $result['error'] = $this->describeNetworkFailure($e);
        }

        $result['latency_ms'] = (int) round((microtime(true) - $start) * 1000);

        return $result;
    }

    /**
     * + добавлено
     * Расшифровывает код ошибки cURL в понятную причину.
     *
     * @param ConnectionException $e
     * @return string
     */
    private function describeNetworkFailure(ConnectionException $e): string
    {
        $previous = $e->getPrevious();
        $errno    = null;

        if ($previous instanceof ConnectException) {
            $errno = $previous->getHandlerContext()['errno'] ?? null;
        }

        switch ($errno) {
            case CURLE_COULDNT_RESOLVE_HOST: // 6
                return 'DNS не резолвится — сервер не может определить адрес домена amoCRM';
            case CURLE_COULDNT_CONNECT: // 7
                return 'Соединение отклонено — маршрут до amoCRM закрыт';
            case CURLE_OPERATION_TIMEDOUT: // 28
                return 'Таймаут — пакеты теряются: файрвол, маршрутизация или блокировка IP';
            case CURLE_SSL_CONNECT_ERROR: // 35
            case CURLE_SSL_PEER_CERTIFICATE: // 60 (в PHP нет CURLE_PEER_FAILED_VERIFICATION)
                return 'Ошибка TLS — проблема с сертификатами на сервере';
            default:
                return 'Сетевой сбой (cURL errno ' . ($errno ?? 'unknown') . ')';
        }
    }
}
