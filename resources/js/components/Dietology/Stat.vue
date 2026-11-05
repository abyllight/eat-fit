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
        <v-chip
            v-if="stat.daily_lite || stat.daily_maxi"
            class="ml-2"
            color="cyan"
            text-color="white"
            label
        >
            Daily LITE: {{ stat.daily_lite }} · MAXI: {{ stat.daily_maxi }}
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
