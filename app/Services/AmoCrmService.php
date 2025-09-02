<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class AmoCrmService
{
    protected string $baseUrl;
    protected string $accessToken;

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
            $response = Http::withHeaders([
                'Authorization' => 'Bearer ' . $this->accessToken,
                'Content-Type'  => 'application/json',
            ])->get($this->baseUrl . '/api/v4/leads', [
                'limit' => $perPage,
                'page'  => $page,
                'filter[statuses][0][pipeline_id]' => $pipelineId,
                'filter[statuses][0][status_id]'   => $statusId,
            ]);

            $data = $response->json()['_embedded']['leads'] ?? [];

            if (empty($data)) {
                break; // сделок больше нет
            }

            $leads = array_merge($leads, $data);

            $page++;
        }

        return array_slice($leads, 0, $limit);
    }
}
