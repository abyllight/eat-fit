<template>
   <div>
       <v-row>
           <v-col cols="12" sm="12" class="d-flex align-center justify-space-between">
               <div class="d-flex align-center">
                   <v-menu
                       v-model="menu"
                       :close-on-content-click="false"
                       :nudge-right="40"
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
                           @input="menu = false"
                           @change="filter"
                       ></v-date-picker>
                   </v-menu>
                   <a
                       type="button"
                       :href="`/api/reports/export/${date}`"
                       class="ml-5"
                   >
                       <v-btn
                           color="primary"
                           @click="excel"
                       >
                           Скачать отчет
                       </v-btn>
                   </a>
               </div>

               <v-btn
                   color="primary"
                   @click="payFact"
                   :disabled="fact"
                   :loading="fact_loading"
               >
                   фактический оплачено
               </v-btn>
           </v-col>
       </v-row>
       <v-row>
           <v-col>
                <v-switch
                    v-model="hasAmount"
                    @change="filter"
                    label="Фактический оплачено"
                ></v-switch>
           </v-col>

           <v-col>
               <v-select
                   v-model="payType"
                   :items="types"
                   item-value="name"
                   item-text="name"
                   label="Тип оплаты"
                   outlined
                   clearable
                    @change="filter"
               ></v-select>
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
        date: new Date().toISOString().split('T')[0],
        hasAmount: false,
        payType: null,
        menu: false,
        couriers: [],
        fact: null,
        fact_loading: false,
        types: []
    }),
    created() {
        this.getFact()
        this.fetchReports()
    },
    methods: {
        fetchReports(){
            axios
                .get('/api/reports')
                .then(response => {
                    this.couriers = response.data.reports
                    this.types = response.data.types
                })
                .catch(error => {
                    console.log(error)
                })
        },
        filter(){
            axios
                .post('/api/reports/filter', {
                    date: this.date,
                    has_amount: this.hasAmount,
                    type: this.payType
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
        },
        getFact() {
            axios
                .get('/api/management/fact')
                .then(response => {
                    this.fact = response.data.fact
                })
                .catch(error => {
                    console.log(error)
                })
        },
        payFact() {
            this.fact = true
            this.fact_loading = true
            axios
                .post('/api/management/fact')
                .then(res => {
                    this.$store.dispatch('showAlert', {
                        isVisible: true,
                        msg: res.data.msg,
                        color: 'success',
                        type: 'success'
                    })

                    location.reload()
                })
                .catch(error => {
                    console.log(error)
                }).finally(() => {
                this.fact = false
                this.fact_loading = false
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
