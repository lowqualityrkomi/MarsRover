<template>
    <v-row>
        <v-col cols="12" md="6">
            <v-text-field
                v-model="x"
                label="X position"
                placeholder="Insert the X position"
                rounded
                flat
                outlined
                color="secondary"
                :error="xError"
                @input="setX()"
            ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
            <v-text-field
                v-model="y"
                label="Y position"
                placeholder="Insert the Y position"
                rounded
                flat
                outlined
                color="secondary"
                :error="yError"
                @input="setY()"
            ></v-text-field>
        </v-col>
    </v-row>
</template>

<script>
export default {
    data() {
        return {
            x: null,
            y: null,
            xError: false,
            yError: false,
        }
    },
    props: {
        surface: '',
    },
    methods: {
        setX() {
            if (
                parseInt(this.x) < 0 ||
                parseInt(this.x) >= parseInt(this.surface)
            ) {
                this.xError = true
            } else {
                this.xError = false
                this.$emit('setX', parseInt(this.x))
            }
        },
        setY() {
            if (
                parseInt(this.y) < 0 ||
                parseInt(this.y) >= parseInt(this.surface)
            ) {
                this.yError = true
            } else {
                this.yError = false
                this.$emit('setY', parseInt(this.y))
            }
        },
    },
}
</script>

<style scoped></style>
