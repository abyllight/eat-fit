<template>
  <v-app>
      <v-alert
          :type="alert.type"
          :value="alert.isVisible"
          style="position: absolute; z-index: 100; top: 16px; left: 0; right: 0; margin: 0 auto;"
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
        nav
        dense
      >
          <v-list-item to="/">
              <v-list-item-icon>
                  <v-icon>mdi-folder</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item>
          <template v-if="user && user.is_admin">
              <v-list-item to="/couriers">
                  <v-list-item-icon>
                      <v-icon>mdi-folder</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>Курьеры</v-list-item-title>
              </v-list-item>
              <v-list-item to="/orders">
                  <v-list-item-icon>
                      <v-icon>mdi-folder</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>Заказы</v-list-item-title>
              </v-list-item>
              <v-list-item to="/map">
                  <v-list-item-icon>
                      <v-icon>mdi-folder</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>Карта</v-list-item-title>
              </v-list-item>
              <v-list-item to="/list">
                  <v-list-item-icon>
                      <v-icon>mdi-folder</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>Список</v-list-item-title>
              </v-list-item>
              <v-list-item to="/report">
                  <v-list-item-icon>
                      <v-icon>mdi-folder</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>Отчет</v-list-item-title>
              </v-list-item>
              <v-list-item to="/cuisine">
                  <v-list-item-icon>
                      <v-icon>mdi-folder</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>Cuisine</v-list-item-title>
              </v-list-item>
          </template>
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
      color="pink"
    >
      <v-app-bar-nav-icon @click="drawer=true"></v-app-bar-nav-icon>
      <v-progress-linear
        :active="loading"
        :indeterminate="loading"
        absolute
        bottom
        color="deep-purple accent-4"
      ></v-progress-linear>
<!--        <v-toolbar-title>{{ title }}</v-toolbar-title>-->
    </v-app-bar>

    <v-main>
      <v-container>
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
            link: '/'
        },
        {
            id: 1,
            title: 'Курьеры',
            link: '/couriers'
        },
    ]
  }),
  computed: {
    ...mapGetters([
      'alert',
      'user',
      'loading'
    ]),
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
    }
  }
}
</script>
