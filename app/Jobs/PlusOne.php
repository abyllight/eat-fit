<?php

namespace App\Jobs;

use AmoCRM\Client;
use AmoCRM\Exception;
use AmoCRM\OAuth2\Client\Provider\AmoCRMException;
use App\Models\Brand;
use App\Models\Order;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;

class PlusOne implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct()
    {

    }

    public function handle()
    {
        $brand = New Brand();
        $brand->title = 'New';
        $brand->is_active = true;
        $brand->save();

        Log::info('Brand created');

        /*try {
            $amo = new Client(env('AMO_SUBDOMAIN'), env('AMO_LOGIN'), env('AMO_HASH'));
            dd($amo->account->apiCurrent()['pipelines']);

            $delivered = $amo->lead->apiList([
                'limit_rows' => 500,
                'status' => 27248140, //Delivered
            ]);

            foreach ($delivered as $value) {

                $day = 0;
                $course = 0;

                foreach ($value['custom_fields'] as $field) {
                    switch ($field["id"]) {
                        case '328089': //Day
                            $day = (int) $field["values"][0]["value"];
                            break;
                        case '321235': //Course
                            $course = (int) $field["values"][0]["value"];
                            break;
                    }
                }

                if($day >= $course) {
                    $lead = $amo->lead;
                    $lead['status_id'] = 16567015;
                    $lead->apiUpdate((int) $value['id'], 'now');

                }else if($day === 3 || $day === 11 || $day === 17 || $day === $course-1){
                    $day++;
                    $lead = $amo->lead;
                    $lead->addCustomField(328089, $day);
                    $lead->apiUpdate((int) $value['id'], 'now');

                    $task = $amo->task;
                    $task['element_id'] = $value['id'];
                    $task['element_type'] = 2;
                    $task['task_type'] = 1;
                    $task['text'] = 'Получить обратную связь от клиента';
                    $task['complete_till'] = '23:59';
                    $task['responsible_user_id'] = $value['responsible_user_id'];
                    $task->apiAdd();
                }else {
                    $day++;
                    $lead = $amo->lead;
                    $lead->addCustomField(328089, $day);
                    $lead->apiUpdate((int)$value['id'], 'now');
                }
            }
        } catch(Exception $e){
            return response()->json($e->getCode());
        }*/
    }
}
