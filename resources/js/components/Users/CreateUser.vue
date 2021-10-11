<template>
    <v-row align="center" justify="center">
        <v-col cols="12"
               sm="10"
               md="8"
               lg="6">
            <v-card>
                <v-card-title>
                    Создать пользователя
                </v-card-title>
                <v-card-text>
                    <v-text-field
                        v-model="name"
                        :error-messages="errors.name"
                        label="Имя"
                        outlined
                        required
                    ></v-text-field>
                    <v-text-field
                        v-model="phone"
                        :error-messages="errors.phone"
                        outlined
                        v-mask="'+7 (###) ###-##-##'"
                        label="Телефон"
                        required
                    ></v-text-field>
                    <v-select
                        v-model="roles"
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
                        v-model="password"
                        :error-messages="errors.password"
                        label="Пароль"
                        outlined
                        required
                    ></v-text-field>
                    <v-btn
                        color="primary"
                        type="submit"
                        @click="create"
                    >
                        Создать
                    </v-btn>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: "AddUser",
    data: () => ({
        name: '',
        phone: '',
        password: '',
        roles: [],
        items: [],
        errors: []
    }),
    mounted() {
        this.fetchRoles()
    },
    methods: {
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
        create() {
            let phone = this.getPhone()
            axios
                .post('api/users', {
                    name: this.name,
                    phone: phone,
                    password: this.password,
                    roles: this.roles
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
        getPhone() {
            return this.phone.replace(/[^0-9]/g,'')
        }
    }
}
</script>
