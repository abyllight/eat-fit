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
          v-if="authenticated"
          v-model="drawer"
          app
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
              v-if="authenticated"
              nav
              dense
          >
              <v-list-item to="/">
                  <v-list-item-icon>
                      <v-icon>mdi-home</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>Главная</v-list-item-title>
              </v-list-item>

              <template v-for="group in menu">
                  <v-subheader v-if="hasAccess(group.roles)">{{group.title}}</v-subheader>

                  <v-list-item
                      v-for="link in group.links"
                      :key="link.link"
                      :to="link.link"
                      v-if="hasAccess(link.roles)"
                  >
                      <v-list-item-icon>
                          <v-icon>mdi-{{link.icon}}</v-icon>
                      </v-list-item-icon>
                      <v-list-item-title>{{link.title}}</v-list-item-title>
                  </v-list-item>
                  <v-divider v-if="hasAccess(group.roles)"></v-divider>
              </template>
          </v-list>
      </v-navigation-drawer>

      <v-app-bar app dark color="grey darken-4">
          <v-app-bar-nav-icon v-if="authenticated" color="white" @click="drawer = !drawer"></v-app-bar-nav-icon>
          <v-toolbar-title>EAT&FIT</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn v-if="authenticated" color="red" @click="logout()">
              <v-icon left>mdi-exit-to-app</v-icon>
              Выйти
          </v-btn>
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
        drawer: null,
        menu: [
            {
                title: 'Админ',
                roles: ['admin'],
                links: [
                    {
                        title: 'Роли',
                        link: '/roles',
                        icon: 'account-star',
                        roles: ['admin']
                    },
                    {
                        title: 'Пользователи',
                        link: '/users',
                        icon: 'account-group',
                        roles: ['admin', 'logistic']
                    },
                    {
                        title: 'Промокоды',
                        link: '/promocodes',
                        icon: 'barcode-scan',
                        roles: ['admin']
                    },
                    {
                        title: 'Менеджер лидов',
                        link: '/management',
                        icon: 'account-star',
                        roles: ['admin', 'office']
                    },
                    {
                        title: 'Рассылка меню Select',
                        link: '/broadcast-menu',
                        icon: 'account-star',
                        roles: ['admin', 'office']
                    },
                ]
            },
            {
                title: 'Логистика',
                roles: ['admin', 'logistic', 'courier'],
                links: [
                    {
                        title: 'Мои заказы',
                        link: '/my-orders',
                        icon: 'bookmark',
                        roles: ['admin', 'logistic', 'courier']
                    },
                    {
                        title: 'Заказы',
                        link: '/orders',
                        icon: 'view-dashboard',
                        roles: ['admin', 'logistic']
                    },
                    {
                        title: 'Карта',
                        link: '/map',
                        icon: 'map-marker',
                        roles: ['admin', 'logistic']
                    },
                    {
                        title: 'Список',
                        link: '/list',
                        icon: 'format-list-numbered',
                        roles: ['admin', 'logistic']
                    },
                    {
                        title: 'Отчет',
                        link: '/reports',
                        icon: 'chart-bar',
                        roles: ['admin', 'logistic']
                    }
                ]
            },
            {
                title: 'Закуп',
                roles: ['admin', 'purchase'],
                links: [
                    {
                        title: 'Категории',
                        link: '/p-categories',
                        icon: 'animation',
                        roles: ['admin', 'purchase']
                    },
                    {
                        title: 'Поставщики',
                        link: '/providers',
                        icon: 'account-box',
                        roles: ['admin', 'purchase']
                    },
                    {
                        title: 'Список для закупа',
                        link: '/purchase-list',
                        icon: 'format-list-numbered',
                        roles: ['admin', 'purchase']
                    },
                ]
            },
            {
                title: 'Кухня',
                roles: ['admin', 'kitchen'],
                links: [
                    {
                        title: 'Марат',
                        link: '/marat',
                        icon: 'format-list-numbered',
                        roles: ['admin', 'kitchen']
                    },
                    {
                        title: 'Список для закупа',
                        link: '/purchase-list-kitchen',
                        icon: 'format-list-numbered',
                        roles: ['admin', 'kitchen']
                    },
                    {
                        title: 'Раскладка',
                        link: '/grid',
                        icon: 'view-grid',
                        roles: ['admin', 'kitchen']
                    },
                    {
                        title: 'Селекты',
                        link: '/cards',
                        icon: 'view-grid',
                        roles: ['admin', 'kitchen']
                    }
                ]
            },
            {
                title: 'Диетология',
                roles: ['admin', 'diet'],
                links: [
                    {
                        title: 'Кухни мира',
                        link: '/cuisines',
                        icon: 'earth',
                        roles: ['admin', 'diet']
                    },
                    {
                        title: 'Блюда',
                        link: '/dishes',
                        icon: 'pasta',
                        roles: ['admin', 'diet']
                    },
                    {
                        title: 'Категория ингредиентов',
                        link: '/category',
                        icon: 'shape',
                        roles: ['admin', 'diet']
                    },
                    {
                        title: 'Ингредиенты',
                        link: '/ingredients',
                        icon: 'circle',
                        roles: ['admin', 'diet']
                    },
                    {
                        title: 'Посуды',
                        link: '/tableware',
                        icon: 'circle',
                        roles: ['admin', 'diet']
                    },
                    {
                        title: 'Рационы',
                        link: '/rations',
                        icon: 'clock',
                        roles: ['admin', 'diet']
                    },
                    {
                        title: 'Селекты',
                        link: '/select',
                        icon: 'star',
                        roles: ['admin', 'diet']
                    }
                ]
            },
            {
                title: 'Лавка',
                roles: ['admin'],
                links: [
                    {
                        title: 'Заказы ВкусСити',
                        link: '/shop-orders',
                        icon: 'view-dashboard',
                        roles: ['admin', 'office']
                    },
                    {
                        title: 'Брэнд',
                        link: '/brands',
                        icon: 'alpha-b-box',
                        roles: ['admin', 'office']
                    },
                    {
                        title: 'Категории',
                        link: '/product-categories',
                        icon: 'alpha-c-box',
                        roles: ['admin', 'office']
                    },
                    {
                        title: 'Продукты',
                        link: '/products',
                        icon: 'alpha-p-box',
                        roles: ['admin', 'office']
                    },
                    {
                        title: 'Builder cat',
                        link: '/b-categories',
                        icon: 'alpha-b-box',
                        roles: ['admin', 'office']
                    },
                    {
                        title: 'Builder val',
                        link: '/b-values',
                        icon: 'alpha-b-box',
                        roles: ['admin', 'office']
                    },
                    {
                        title: 'Builder mix',
                        link: '/b-mix',
                        icon: 'alpha-b-box',
                        roles: ['admin', 'office']
                    }
                ]
            }
        ]
    }),
    computed: {
        ...mapGetters({
            alert: 'alert',
            user: 'auth/user',
            authenticated: 'auth/authenticated'
        })
    },
    methods: {
        logout() {
            axios
                .post('/api/logout')
                .then(response => {
                    if(response.data.status){
                        this.$store.dispatch('auth/logout')
                    }else{
                        this.errors = response.data.errors
                    }
                })
                .catch(error => {
                    this.errors = error.response.data.errors
                })
        },
        hasAccess(roles){
            return this.user.is_admin || roles.some(r => this.user.role_slugs.includes(r))
        }
    }
}
</script>
