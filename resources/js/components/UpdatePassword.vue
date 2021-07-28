<template>
    <v-form
        ref="form"
        v-model="valid"
        lazy-validation
    >
        <v-text-field
            v-model="password"
            :counter="10"
            :rules="passwordRules"
            label="Пароль"
            required
        ></v-text-field>

        <v-btn
            :disabled="!valid"
            color="success"
            class="mt-4"
            @click="validate"
        >
            Сохранить
        </v-btn>
    </v-form>
</template>
<script>
export default {
    data: () => ({
        valid: true,
        password: '',
        passwordRules: [
            v => !!v || 'Name is required',
        ],
    }),

    methods: {
        validate () {
            if (!this.$refs.form.validate()) return;

            axios
                .patch('/api/couriers/' + this.$route.params.id, {
                    password: this.password
                })
                .then(response => {
                    this.$store.dispatch('showAlert', {
                        'isVisible': true,
                        'msg': response.data.message,
                        'color': response.data.status ? 'green' : 'error',
                        'type': response.data.status ? 'success' : 'error'
                    })

                    this.$router.push('/couriers')
                })
                .catch(error => {
                    this.$store.commit('SET_ALERT', {
                        'isVisible': true,
                        'msg': error.message,
                        'color': 'error',
                        'type': 'error'
                    })
                })
        }
    },
}
</script>
