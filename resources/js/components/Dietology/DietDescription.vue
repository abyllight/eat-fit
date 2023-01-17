<template>
    <div>
        <v-row>
            <v-col
                sm="12"
                md="6"
            >
                <v-card v-if="diet" class="mb-4" color="lime lighten-4">
                    <v-card-text>
                        {{diet}}
                    </v-card-text>
                </v-card>
            </v-col>

            <v-col
                sm="12"
                md="6"
            >
                <v-card v-if="diet_old" color="red lighten-4">
                    <v-card-text>
                        {{diet_old}}
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: "DietDescription",
    props: ['diet', 'diet_old']
}
</script>
