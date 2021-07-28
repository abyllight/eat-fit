<template>
   <div>
       <v-row>
           <v-col cols="3">
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
                           @click="$refs.menu.save(date)"
                       >
                           OK
                       </v-btn>
                   </v-date-picker>
               </v-menu>
           </v-col>
           <v-col>
               <a
                   type="button"
                   href="/api/report/export/"
               >
                   <v-btn
                       color="primary"
                       @click=""
                   >
                       Скачать отчет
                   </v-btn>
               </a>
           </v-col>
       </v-row>
       <v-row>

       </v-row>
   </div>
</template>

<script>
export default {
    name: 'Report',
    data: () => ({
        date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        menu: false
    })
}
</script>
