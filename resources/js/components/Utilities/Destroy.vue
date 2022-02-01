<template>
    <v-row justify="center">
        <v-dialog v-model="is_visible" max-width="500px">
            <v-card>
                <v-card-title class="text-h5">Вы уверены, что хотите удалить роль?</v-card-title>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="close">Отмена</v-btn>
                    <v-btn color="blue darken-1" text @click="deleteItemConfirm">ДА</v-btn>
                    <v-spacer></v-spacer>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
export default {
    name: "Destroy",
    props: {
        id: Number,
        is_visible: Boolean,
        link: String
    },
    methods: {
        close() {
            this.$emit('close')
        },
        deleteItemConfirm(){
            axios
                .delete(this.link + this.id)
                .then(response => {
                    this.dialogDelete = false
                    this.role = {}
                    this.$store.dispatch('showAlert', {
                        'isVisible': true,
                        'msg': response.data.msg,
                        'color': response.data.status ? 'green' : 'error',
                        'type': response.data.status ? 'success' : 'error'
                    })
                    this.fetchRoles()
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
}
</script>
