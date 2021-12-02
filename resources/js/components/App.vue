<template>
  <v-app>
        <v-alert
          :type="alert.type"
          :value="alert.isVisible"
          style="position: fixed; z-index: 10000; top: 16px; left: 0; right: 0; margin: 0 auto;"
          :color="alert.color"
          dark
          max-width="374"
      >{{ alert.msg }}</v-alert>

        <v-navigation-drawer
          app
          v-model="drawer"
          fixed
          temporary
        >
          <v-list>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="title">
                  {{ user ? user.name : 'Гость' }}
                </v-list-item-title>
                <v-list-item-subtitle>{{ user ? user.phone : '' }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <v-divider></v-divider>

          <v-list
              v-if="user"
            nav
            dense
          >
              <v-list-item
                  v-for="link in links"
                  :key="link.id"
                  :to="link.link"
                  v-if="link.roles.some(r=> user.roles.includes(r)) || user.is_admin"
              >
                  <v-list-item-icon>
                      <v-icon>mdi-folder</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>{{link.title}}</v-list-item-title>
              </v-list-item>
          </v-list>

          <template v-if="user" v-slot:append>
            <div class="pa-2">
              <v-btn block
                     color="red"
                     dark
                     @click="logout()"
              >
                Выйти
              </v-btn>
            </div>
          </template>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="grey darken-4"
    >
      <v-app-bar-nav-icon color="white" @click="drawer=true"></v-app-bar-nav-icon>
      <v-progress-linear
        :active="loading"
        :indeterminate="loading"
        absolute
        bottom
        color="deep-purple accent-4"
      ></v-progress-linear>
        <v-toolbar-title class="white--text">EAT&FIT</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: "App",
  data: () => ({
    drawer: false,
    links: [
        {
            id: 0,
            title: 'Dashboard',
            link: '/',
            roles: [7,9]
        },
        {
            id: 11,
            title: 'Мои заказы',
            link: '/my-orders',
            roles: [7,9]
        },
        {
            id: 1,
            title: 'Роли',
            link: '/roles',
            roles: []
        },
        {
            id: 2,
            title: 'Пользователи',
            link: '/users',
            roles: [7]
        },
        {
            id: 4,
            title: 'Заказы',
            link: '/orders',
            roles: [7]
        },
        {
            id: 5,
            title: 'Карта',
            link: '/map',
            roles: [7]
        },
        {
            id: 6,
            title: 'Список',
            link: '/list',
            roles: [7]
        },
        {
            id: 7,
            title: 'Отчет',
            link: '/reports',
            roles: [7]
        },
        {
            id: 3,
            title: 'Промокоды',
            link: '/promocodes',
            roles: [7]
        },
        {
            id: 12,
            title: 'Заказы для Кухни',
            link: '/kitchen-orders',
            roles: [11]
        },
        {
            id: 15,
            title: 'Рационы',
            link: '/rations',
            roles: [11]
        },
        {
            id: 8,
            title: 'Кухни мира',
            link: '/cuisines',
            roles: [11]
        },
        {
            id: 9,
            title: 'Блюда',
            link: '/dishes',
            roles: [11]
        },
        {
            id: 13,
            title: 'Категория ингредиентов',
            link: '/category',
            roles: [11]
        },
        {
            id: 10,
            title: 'Ингредиенты',
            link: '/ingredients',
            roles: [11]
        },
        {
            id: 14,
            title: 'Select',
            link: '/select',
            roles: [11]
        },
    ]
  }),
  computed: {
    ...mapGetters([
      'alert',
      'user',
      'loading'
    ])
  },
  methods: {
    logout() {
        axios.post('/api/logout')
            .then(response => {
                if(response.data.status){
                    this.$store.dispatch('logout')
                }else{
                    this.errors = response.data.errors
                }
        }).catch(error => {
            this.errors = error.response.data.errors
        })
    }
  }
}
</script>
