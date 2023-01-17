<template>
    <div>
        <v-chip
            class="mr-2"
            color="teal"
            text-color="white"
            label
        >
            Итого: {{ stat.total }}
        </v-chip>
        <v-chip
            class="mr-2"
            label
        >
            XS: {{ stat.xs }}
        </v-chip>
        <v-chip
            class="mr-2"
            label
        >
            S: {{ stat.s }}
        </v-chip>
        <v-chip
            class="mr-2"
            label
        >
            M: {{ stat.m }}
        </v-chip>
        <v-chip
            class="mr-2"
            label
        >
            L: {{ stat.l }}
        </v-chip>
        <v-chip
            label
        >
            XL: {{ stat.xl }}
        </v-chip>
    </div>
</template>

<script>
export default {
    name: "Stat",
    props: {
        stat: Object
    }
}
</script>
