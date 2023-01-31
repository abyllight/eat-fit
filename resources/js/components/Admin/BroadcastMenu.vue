<template>
    <div>
<!--        <v-row>
            <v-col
                v-for="item in items"
                :key="item.name"
                cols="4"
            >
                <div>
                    <h5 class="mb-2">{{item.name}}</h5>
                    <div class="d-flex">
                        <div
                            style="width: 160px; height: 240px; border: 1px dashed darkgrey;"
                            class="mr-4 rounded"
                            :class="item.f1 === null ? 'd-flex justify-center align-center' : ''"
                        >
                            <v-btn icon @click="openDialog(item.id, 1)">
                                <v-icon>mdi-plus</v-icon>
                            </v-btn>
                        </div>

&lt;!&ndash;                        <div style="width: 160px; height: 240px; border: 1px dashed darkgrey" class="rounded">

                        </div>&ndash;&gt;
                    </div>
                </div>
            </v-col>
        </v-row>

        <v-file-input ref="uploader" @change="onFileChanged" class="d-none"></v-file-input>-->

    </div>
</template>

<script>
export default {
    name: "BroadcastMenu",
    data: () => ({
        items: [],
        file: null,
        c_id: null,
        type: null,
        dialog: false
    }),
    mounted() {
        this.getItems()
    },
    methods: {
        getItems() {
            axios.get('/api/broadcast')
                .then(res => {
                    this.items = res.data.data
                })
        },
        openDialog(id, type) {
            this.c_id = id
            this.type = type
            this.$refs.uploader.$el.click()
            console.log(this.$refs.uploader)
        },
        onFileChanged(e) {
            this.file = e.target.files[0];
            console.log(e.target, this.file)
        },
        addImage(id, type) {
            let dataForm = new FormData()
            dataForm.append('file', this.file)
            dataForm.append('c_id', id)
            dataForm.append('type', type)
            dataForm.append('_method', 'POST');

            axios({
                method: 'POST',
                url: '/api/broadcast/',
                data: dataForm,
                headers: {
                    'content-type': 'multipart/form-data'
                }
            }).then(() => {
                this.file = null
                this.getItems()
            }).catch(err => {
                console.log(err)
            })
        }
    }
}
</script>
