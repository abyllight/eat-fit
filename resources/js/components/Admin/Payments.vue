<template>
   <div>
       <v-row>
           <v-col>
               <v-btn @click="fetchLeads" color="primary" :loading="loading" :disabled="loading">Получить сделки</v-btn>
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
                                   Тип оплаты
                               </th>
                               <th class="text-left">
                                   Фактический оплачено
                               </th>
                           </tr>
                       </thead>
                       <tbody>
                        <template v-for="(item, index) in items">
                            <tr @click="showDetails(item)">
                                <td>{{ index + 1 }}</td>
                                <td>{{ item.name }}</td>
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
        menu: false,
        date: null,
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
    methods: {
        fetchItems() {
            this.menu = false
            axios
                .get('/api/payments', {
                    params: {
                        date: this.date,
                        pay_type: this.payType
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
