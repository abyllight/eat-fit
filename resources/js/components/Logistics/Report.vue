<template>
   <div>
       <v-row>
           <v-col cols="12" sm="12" lg="3">
               <v-menu
                   ref="menu"
                   v-model="menu"
                   :close-on-content-click="false"
                   :return-value.sync="date"
                   transition="scale-transition"
                   offset-y
                   min-width="auto"
               >
                   <template v-slot:activator="{ on, attrs }">
                       <v-text-field
                           v-model="date"
                           label="Выберите дату"
                           prepend-icon="mdi-calendar"
                           readonly
                           v-bind="attrs"
                           v-on="on"
                       ></v-text-field>
                   </template>
                   <v-date-picker
                       v-model="date"
                       :max="max"
                       no-title
                       scrollable
                   >
                       <v-spacer></v-spacer>
                       <v-btn
                           text
                           color="primary"
                           @click="menu = false"
                       >
                           Cancel
                       </v-btn>
                       <v-btn
                           text
                           color="primary"
                           @click="filter"
                       >
                           OK
                       </v-btn>
                   </v-date-picker>
               </v-menu>
           </v-col>
           <v-col sm="12" lg="3">
               <a
                   type="button"
                   :href="`/api/reports/export/${date}`"
               >
                   <v-btn
                       color="primary"
                       @click="excel"
                   >
                       Скачать отчет
                   </v-btn>
               </a>
           </v-col>
       </v-row>
       <v-row v-for="courier in couriers" :key="courier.id">
           <v-col>
               <h3>{{ courier[0] ? courier[0].courier +' - '+ courier.length : '' }}</h3>
               <v-simple-table>
                   <template v-slot:default>
                       <thead>
                           <tr>
                               <th class="text-left">
                                   Имя
                               </th>
                               <th class="text-left">
                                   Время
                               </th>
                               <th class="text-left">
                                   Адрес
                               </th>
                               <th class="text-left">
                                   Тип
                               </th>
                               <th class="text-left">
                                   Сумма
                               </th>
                               <th class="text-left">
                                   Статус отчета
                               </th>
                               <th class="text-left">
                                   Время отчета
                               </th>
                               <th class="text-left">
                                   Время Еду
                               </th>
                           </tr>
                       </thead>
                       <tbody>
                        <template v-for="item in courier">
                            <tr>
                                <td>{{ item.name }}</td>
                                <td>{{ item.time }}</td>
                                <td>{{ item.address }}</td>
                                <td>{{ item.type }}</td>
                                <td>{{ item.amount }}</td>
                                <td>
                                    <v-chip
                                        label
                                        small
                                        :color="item.report_color"
                                    >
                                        {{ item.report_status }}
                                    </v-chip>
                                </td>
                                <td>
                                    {{ item.reported_at }}
                                    <v-chip
                                        label
                                        small
                                        :color="item.report_time_color"
                                    >
                                        {{ item.report_time_status }}
                                    </v-chip>
                                </td>
                                <td>
                                    {{ item.notified_at }}
                                    <v-chip
                                        label
                                        small
                                        :color="item.notification_color"
                                    >
                                        {{ item.notification_status }}
                                    </v-chip>
                                </td>
                            </tr>
                            <tr class="grey lighten-3">
                                <td colspan="10">{{item.comment}}</td>
                            </tr>
                        </template>
                       </tbody>
                   </template>
               </v-simple-table>
           </v-col>
       </v-row>
   </div>
</template>

<script>
import axios from "axios";

export default {
    name: 'Report',
    data: () => ({
        max: null,
        date: null,
        menu: false,
        couriers: []
    }),
    created() {
        this.fetchReports()
    },
    methods: {
        fetchReports(){
            axios
                .get('/api/reports')
                .then(response => {
                    this.max = response.data.max
                    this.date = response.data.max
                    this.couriers = response.data.reports
                })
                .catch(error => {
                    console.log(error)
                })
        },
        filter(){
            axios
                .post('/api/reports/filter', {
                    date: this.date
                })
                .then(response => {
                    this.menu = false
                    this.couriers = response.data.reports
                })
                .catch(error => {
                    console.log(error)
                })
        },
        excel(){
            axios
                .get('/api/reports/export/' + this.date)
                .then(response => {
                    console.log(response)
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
}
</script>

<style scoped>
    table, td {
        border: 1px solid black;
    }
</style>
