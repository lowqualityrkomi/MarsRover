<template>
    <v-card color="warning">
        <v-card-title>Rover info</v-card-title>
        <v-card-text>
            <v-row>
                <v-col cols="4">
                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon :color="collision ? 'red' : 'green'">
                                mdi-checkbox-blank-circle
                            </v-icon>
                        </v-list-item-icon>
                        <v-list-item-content class="text-uppercase">
                            {{ status }}
                        </v-list-item-content>
                    </v-list-item>
                </v-col>
                <v-col cols="4">
                    <v-list-item>
                        <v-list-item-icon> X </v-list-item-icon>
                        <v-list-item-content>
                            {{ x }}
                        </v-list-item-content>
                    </v-list-item>
                </v-col>
                <v-col cols="4">
                    <v-list-item>
                        <v-list-item-icon> Y </v-list-item-icon>
                        <v-list-item-content>
                            {{ y }}
                        </v-list-item-content>
                    </v-list-item>
                </v-col>
            </v-row>
        </v-card-text>
        <v-card-actions>
            <v-btn block rounded color="accent" @click="open()">
                See list of actions
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    props: {
        x: null,
        y: null,
        status: null,
        collision: null,
    },
    methods: {
        open() {
            this.$emit('openActionList')
        },
    },
}
</script>

<style scoped></style>
