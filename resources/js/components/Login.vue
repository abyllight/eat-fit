<template>
    <div>
        <v-card class="mx-auto my-12" max-width="374">
            <v-card-title>Логин</v-card-title>
            <form class="pa-4">
                <v-text-field
                    v-model="phone"
                    :error-messages="errors.phone"
                    label="Телефон"
                    outlined
                    v-mask="'+7 (###) ###-##-##'"
                    prepend-inner-icon="mdi-cellphone"
                ></v-text-field>

                <v-text-field
                    v-model="password"
                    :error-messages="errors.password"
                    :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="showPass ? 'text' : 'password'"
                    label="Пароль"
                    counter
                    outlined
                    prepend-inner-icon="mdi-lock"
                    @click:append="showPass = !showPass"
                ></v-text-field>

                <v-btn
                    class="mt-4"
                    :loading="loading"
                    :disabled="loading"
                    color="primary"
                    @click="submit"
                >
                    Войти
                </v-btn>
            </form>
        </v-card>
    </div>
</template>
<script>

export default {
    name: 'Login',
    data: () => ({
        phone: '',
        password: '',
        showPass: false,
        loading: false,
        errors: []
    }),
    methods: {
      submit () {
            this.loading = true
            let phone = this.getPhone()

            axios.get('/csrf-cookie').then(() => {
                axios.post('/api/login', {
                    phone: phone,
                    password: this.password
                }).then(response => {
                    this.loading = false
                    if(response.data.status){
                        this.$store.dispatch('login', response.data.user)
                        this.$router.push({name: 'dashboard'})
                    }else{
                        this.errors = response.data.errors
                    }
                }).catch(error => {
                    this.loading = false
                    this.errors = error.response.data.errors
                })
            }).catch(() => {
                this.$store.dispatch('showAlert', {
                    isVisible: true,
                    msg: 'CSRF error',
                    color: 'error',
                    type: 'error'
                })
            })
        },
      getPhone() {
        return this.phone.replace(/[^0-9]/g,'')
      }
    }
}
</script>
