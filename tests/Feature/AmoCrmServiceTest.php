<?php

namespace Tests\Feature;

use App\Models\User;
use App\Services\AmoCrmService;
use Illuminate\Http\Client\ConnectionException;
use Illuminate\Http\Client\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Tests\TestCase;

/**
 * No database and no real amo: every HTTP call is faked.
 */
class AmoCrmServiceTest extends TestCase
{
    private function service(): AmoCrmService
    {
        $amo = new AmoCrmService();
        $amo->baseUrl     = 'https://example.amocrm.test';
        $amo->accessToken = 'test-token';

        return $amo;
    }

    public function test_assigned_courier_name_and_phone_go_to_the_deal()
    {
        Http::fake(['*' => Http::response(['id' => 123], 200)]);

        $courier = new User(['name' => 'Тест Курьер', 'phone' => '+77000000000']);

        $this->assertTrue($this->service()->setLeadCourier(123, $courier));

        Http::assertSent(function (Request $request) {
            return $request->method() === 'PATCH'
                && $request->url() === 'https://example.amocrm.test/api/v4/leads/123'
                && $request->hasHeader('Authorization', 'Bearer test-token')
                && $request->data() === [
                    'custom_fields_values' => [
                        ['field_id' => 489497, 'values' => [['value' => 'Тест Курьер']]],
                        ['field_id' => 489499, 'values' => [['value' => '+77000000000']]],
                    ],
                ];
        });
    }

    public function test_removed_courier_clears_both_fields()
    {
        Http::fake(['*' => Http::response(['id' => 123], 200)]);

        $this->assertTrue($this->service()->setLeadCourier(123, null));

        Http::assertSent(function (Request $request) {
            return $request->data() === [
                'custom_fields_values' => [
                    ['field_id' => 489497, 'values' => null],
                    ['field_id' => 489499, 'values' => null],
                ],
            ];
        });
    }

    public function test_amo_error_response_is_logged_not_thrown()
    {
        Http::fake(['*' => Http::response(['title' => 'Bad Request'], 400)]);
        Log::shouldReceive('error')->once()->withArgs(function ($message, $context) {
            return $message === 'amoCRM: обновление сделки завершилось ошибкой'
                && $context['lead_id'] === 123
                && $context['status'] === 400;
        });

        $this->assertFalse($this->service()->setLeadCourier(123, null));
    }

    public function test_amo_connection_failure_is_logged_not_thrown()
    {
        Http::fake(function () {
            throw new ConnectionException('timeout');
        });
        Log::shouldReceive('error')->once()->withArgs(function ($message, $context) {
            return $message === 'amoCRM: сетевой сбой при обновлении сделки'
                && $context['lead_id'] === 123
                && $context['message'] === 'timeout';
        });

        $this->assertFalse($this->service()->setLeadCourier(123, null));
    }
}
