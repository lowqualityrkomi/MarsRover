<template>
    <div>
        <v-btn
            :disabled="collision"
            color="accent"
            block
            x-large
            @click="setAction('FW')"
        >
            FW
        </v-btn>
        <v-row class="my-3">
            <v-col cols="6">
                <v-btn
                    :disabled="collision"
                    color="accent"
                    block
                    x-large
                    @click="setAction('TL')"
                >
                    <v-icon>mdi-chevron-left</v-icon>
                </v-btn>
            </v-col>
            <v-col cols="6">
                <v-btn
                    :disabled="collision"
                    color="accent"
                    block
                    x-large
                    @click="setAction('TR')"
                >
                    <v-icon>mdi-chevron-right</v-icon>
                </v-btn>
            </v-col>
        </v-row>
        <v-btn
            :disabled="collision"
            color="accent"
            block
            x-large
            @click="setAction('BW')"
        >
            BW
        </v-btn>
    </div>
</template>

<script>
export default {
    props: {
        collision: null,
    },

    methods: {
        setAction(value) {
            this.$emit('setAction', value)
        },
    },
}
</script>

<style scoped></style>
