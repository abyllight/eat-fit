<template>
    <v-row align="center" justify="center">
        <v-col cols="12"
               sm="10"
               md="8"
               lg="6">
            <v-card>
                <v-card-title>
                    Роль
                </v-card-title>
                <v-card-text>
                    <v-text-field
                        v-model="name"
                        :error-messages="errors.name"
                        label="Название"
                        outlined
                        required
                    ></v-text-field>
                    <v-text-field
                        v-model="slug"
                        :error-messages="errors.slug"
                        outlined
                        label="Код"
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
    name: "AddRole",
    data: () => ({
        name: '',
        slug: '',
        errors: []
    }),
    methods: {
        create() {
            axios
                .post('api/roles', {
                    name: this.name,
                    slug: this.slug
                })
                .then(response => {
                    this.$store.dispatch('showAlert', {
                        'isVisible': true,
                        'msg': response.data.msg,
                        'color': response.data.status ? 'green' : 'error',
                        'type': response.data.status ? 'success' : 'error'
                    })
                    this.$router.push('/roles')
                })
                .catch(error => {
                    this.errors = error.response.data.errors
                })
        }
    }
}
</script>
