<template>
   <div>
       <v-row>
           <v-col>
               <div class="d-flex justify-space-between align-start">
                   <v-btn @click="fetchLeads" color="primary" :loading="loading" :disabled="loading">Получить сделки</v-btn>
                   <div>
                       <h4 class="mb-0">{{totalDiff}}тг</h4>
                       <v-checkbox
                           v-model="has_diff"
                           label="Сверхоплаты"
                           @click="fetchItems"
                           class="mt-0"
                       ></v-checkbox>
                   </div>
               </div>
           </v-col>
       </v-row>
       <v-row>
           <v-col>
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
                           outlined
                           v-bind="attrs"
                           v-on="on"
                       ></v-text-field>
                   </template>
                   <v-date-picker
                       v-model="date"
                       @input="menu = false"
                       @change="fetchItems"
                   ></v-date-picker>
               </v-menu>
           </v-col>
           <v-col>
               <v-select
                   v-model="payType"
                   :items="types"
                   item-value="id"
                   item-text="name"
                   label="Тип оплаты"
                   outlined
                   clearable
                   @change="fetchItems"
               ></v-select>
           </v-col>
       </v-row>
       <v-row>
           <v-col>
               <h2>{{total}}</h2>
               <v-simple-table>
                   <template v-slot:default>
                       <thead>
                           <tr>
                               <th class="text-left">
                                   #
                               </th>
                               <th class="text-left">
                                   Имя
                               </th>
                               <th class="text-left">
                                   Курс
                               </th>
                               <th class="text-left">
                                   Фактический оплачено
                               </th>
                               <th class="text-left">
                                   Тип оплаты
                               </th>
                               <th class="text-left">
                                   Оплата
                               </th>
                           </tr>
                       </thead>
                       <tbody>
                        <template v-for="(item, index) in items">
                            <tr @click="showDetails(item)" :class="item.fact > item.course ? 'light-green lighten-4' : ''">
                                <td>{{ index + 1 }}</td>
                                <td>{{ item.name }}</td>
                                <td>{{ item.course }}</td>
                                <td>{{ item.fact }}</td>
                                <td>{{ item.pay_type }}</td>
                                <td>{{ item.pay_fact }}</td>
                            </tr>
                        </template>
                       </tbody>
                   </template>
               </v-simple-table>
           </v-col>
       </v-row>

       <div class="text-center">
           <v-dialog
               v-model="dialog"
               width="500"
           >
               <v-card
                   :disabled="payLoading"
                   :loading="payLoading"
               >
                   <v-card-title class="text-h5 grey lighten-2">
                       {{item.name}}
                   </v-card-title>

                   <v-card-text>

                       <v-select
                           class="mt-5"
                           v-model="item.pay_type"
                           :items="types"
                           item-value="id"
                           item-text="name"
                           label="Тип оплаты"
                           outlined
                           clearable
                       ></v-select>

                       <v-text-field
                           v-model="item.pay_fact"
                            type="number"
                           label="Фактический оплачено"
                           outlined
                           clearable
                       ></v-text-field>
                   </v-card-text>

                   <v-divider></v-divider>

                   <v-card-actions>
                       <v-btn
                           color="red"
                           text
                           @click="closeDialog"
                       >
                           Закрыть
                       </v-btn>
                       <v-spacer></v-spacer>
                       <v-btn
                           color="primary"
                           text
                           @click="setPayFact"
                       >
                           Сохранить
                       </v-btn>
                   </v-card-actions>
               </v-card>
           </v-dialog>
       </div>
   </div>
</template>

<script>
import axios from "axios";

export default {
    name: 'Payments',
    data: () => ({
        dialog: false,
        has_diff: false,
        menu: false,
        date: new Date().toISOString().split('T')[0],
        items: [],
        item: {},
        types: [],
        payType: null,
        payLoading: false,
        loading: false
    }),
    created() {
        this.fetchItems()
    },
    computed: {
        total() {
            return this.items.reduce((sum, item) => sum + item.pay_fact, 0)
        },
        totalDiff() {
            return this.items.reduce((sum, item) => sum + item.fact_diff, 0)
        }
    },
    methods: {
        fetchItems() {
            this.menu = false
            axios
                .get('/api/payments', {
                    params: {
                        date: this.date,
                        pay_type: this.payType,
                        has_diff: this.has_diff
                    }
                })
                .then(response => {
                    this.types = response.data.types
                    this.items = response.data.items
                })
                .catch(error => {
                    console.log(error)
                })
        },
        fetchLeads() {
            this.loading = true

            axios
                .get('/api/payments/leads')
                .then(() => {
                    this.fetchItems()
                })
                .catch(error => {
                    console.log(error)
                }).finally(() => {
                    this.loading = false
            })
        },
        showDetails(item) {
            this.item = item
            this.dialog = true
        },
        closeDialog() {
            this.item = {}
            this.dialog = false
        },
        setPayFact() {
            this.payLoading = true
            axios
                .post('/api/payments', {
                    id: this.item.id,
                    pay_fact: this.item.pay_fact,
                    pay_type: this.item.pay_type
                })
                .then(() => {
                    this.closeDialog()
                    this.fetchItems()
                })
                .catch(error => {
                    console.log(error)
                }).finally(() => {
                    this.payLoading = false
            })
        }
    }
}
</script>
