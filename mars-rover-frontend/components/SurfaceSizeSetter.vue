<template>
    <v-row>
        <v-col cols="12">
            <v-text-field
                v-model="surface"
                label="Surface size"
                placeholder="Insert the surface size (max suggested: 20)"
                rounded
                flat
                outlined
                color="secondary"
                @input="setSurface()"
            ></v-text-field>
        </v-col>
    </v-row>
</template>

<script>
export default {
    data() {
        return {
            surface: null,
        }
    },
    methods: {
        setSurface() {
            this.$emit('setSurface', parseInt(this.surface))
        },
    },
}
</script>

<style scoped></style>
