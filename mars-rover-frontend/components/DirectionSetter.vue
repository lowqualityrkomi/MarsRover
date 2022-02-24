<template>
    <v-row>
        <v-col cols="6" lg="3">
            <v-btn
                :color="direction != 0 ? 'warning' : 'accent'"
                x-large
                block
                rounded
                @click="setDirection(0)"
                >N</v-btn
            >
        </v-col>
        <v-col cols="6" lg="3">
            <v-btn
                :color="direction != 1 ? 'warning' : 'accent'"
                x-large
                block
                rounded
                @click="setDirection(1)"
                >E</v-btn
            >
        </v-col>
        <v-col cols="6" lg="3">
            <v-btn
                :color="direction != 2 ? 'warning' : 'accent'"
                x-large
                block
                rounded
                @click="setDirection(2)"
                >S</v-btn
            >
        </v-col>
        <v-col cols="6" lg="3">
            <v-btn
                :color="direction != 3 ? 'warning' : 'accent'"
                x-large
                block
                rounded
                @click="setDirection(3)"
                >W</v-btn
            >
        </v-col>
    </v-row>
</template>

<script>
export default {
    data() {
        return {}
    },
    props: {
        direction: null,
    },
    methods: {
        setDirection(value) {
            this.$emit('setDirection', value)
        },
    },
}
</script>

<style scoped></style>
