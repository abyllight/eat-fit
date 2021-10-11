<template>
    <v-row align="center" justify="center">
        <v-col cols="12"
               sm="10"
               md="8"
               lg="6">
            <v-card>
                <v-card-title>
                    Редактировать роль
                </v-card-title>
                <v-card-text>
                    <v-text-field
                        v-model="role.name"
                        :error-messages="errors.name"
                        label="Название"
                        outlined
                        clearable
                        required
                    ></v-text-field>
                    <v-text-field
                        v-model="role.slug"
                        :error-messages="errors.slug"
                        outlined
                        clearable
                        label="Код"
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
    name: "AddRole",
    data: () => ({
        role: {},
        errors: []
    }),
    beforeMount() {
        this.fetchRole()
    },
    methods: {
        fetchRole(){
            let id = this.$route.params.id

            axios
                .get('/api/roles/'+ id +'/edit')
                .then(response => {
                    if (!response.data.status) {
                        this.$store.dispatch('showAlert', {
                            'isVisible': true,
                            'msg': response.data.msg,
                            'color': response.data.status ? 'green' : 'error',
                            'type': response.data.status ? 'success' : 'error'
                        })
                    }
                    this.role = response.data.role
                })
                .catch(error => {
                    console.log(error)
                })
        },
        update(){
            axios
                .patch('/api/roles/' + this.role.id, {
                    name: this.role.name,
                    slug: this.role.slug
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
        },
    }
}
</script>
