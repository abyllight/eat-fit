<template>
    <v-row align="center" justify="center">
        <v-col cols="12"
               sm="10"
               md="8"
               lg="6">
            <v-card>
                <v-card-title>
                    Редактировать пользователя
                </v-card-title>
                <v-card-text>
                    <v-text-field
                        v-model="user.name"
                        :error-messages="errors.name"
                        label="Имя"
                        outlined
                        required
                    ></v-text-field>
                    <v-text-field
                        v-model="user.phone"
                        :error-messages="errors.phone"
                        outlined
                        v-mask="'+7 (###) ###-##-##'"
                        label="Телефон"
                        required
                    ></v-text-field>
                    <v-select
                        v-model="user.roles"
                        :items="items"
                        item-text="name"
                        item-value="id"
                        :error-messages="errors.roles"
                        outlined
                        chips
                        label="Роли"
                        multiple
                    ></v-select>
                    <v-text-field
                        v-model="user.password"
                        :error-messages="errors.password"
                        label="Пароль"
                        outlined
                        required
                    ></v-text-field>
                    <v-btn
                        color="primary"
                        type="submit"
                        @click="update"
                    >
                        Обновить
                    </v-btn>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: "EditUser",
    data: () => ({
        user: {},
        items: [],
        errors: []
    }),
    beforeMount() {
        this.fetchUser()
    },
    mounted() {
        this.fetchRoles()
    },
    methods: {
        fetchUser(){
            let id = this.$route.params.id

            axios
                .get('/api/users/'+ id +'/edit')
                .then(response => {
                    if (!response.data.status) {
                        this.$store.dispatch('showAlert', {
                            'isVisible': true,
                            'msg': response.data.msg,
                            'color': response.data.status ? 'green' : 'error',
                            'type': response.data.status ? 'success' : 'error'
                        })
                    }
                    this.user = response.data.user
                })
                .catch(error => {
                    console.log(error)
                })
        },
        async fetchRoles() {
            await axios
                .get('/api/roles')
                .then(response => {
                    this.items = response.data ?? []
                })
                .catch(error => {
                    console.log(error)
                })
        },
        update(){
            let phone = this.getPhone(this.user.phone)
            axios
                .patch('/api/users/' + this.user.id, {
                    name: this.user.name,
                    phone: phone,
                    roles: this.user.roles,
                    password: this.user.password
                })
                .then(response => {
                    this.$store.dispatch('showAlert', {
                        'isVisible': true,
                        'msg': response.data.msg,
                        'color': response.data.status ? 'green' : 'error',
                        'type': response.data.status ? 'success' : 'error'
                    })
                    this.$router.push('/users')
                })
                .catch(error => {
                    this.errors = error.response.data.errors
                })
        },
        getPhone(phone) {
            return phone.replace(/[^0-9]/g,'')
        }
    }
}
</script>
