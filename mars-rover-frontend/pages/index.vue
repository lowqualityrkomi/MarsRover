<template>
    <v-container>
        <v-card
            color="transparent"
            flat
            class="full-heigth d-flex flex-column justify-space-between justify-space-around"
        >
            <v-card-title>
                <h1 class="text-center primary--text">Mars rover</h1>
                <v-btn icon @click="dialog = true">
                    <v-icon color="secondary">mdi-help-circle-outline</v-icon>
                </v-btn>
                <HelpDialog
                    :dialog="dialog"
                    v-on:closeDialog="dialog = false"
                />
            </v-card-title>
            <v-card-text>
                <SurfaceSizeSetter v-on:setSurface="setSurface($event)" />
                <PositionSetter
                    v-if="surface != '' && surface > 0"
                    :surface="surface"
                    v-on:setX="setX($event)"
                    v-on:setY="setY($event)"
                />
                <DirectionSetter
                    v-if="surface != '' && surface > 0"
                    :direction="direction"
                    v-on:setDirection="setDirection($event)"
                />
            </v-card-text>
            <v-card-actions class="mt-5">
                <v-btn
                    :disabled="
                        surface != '' &&
                        x != '' &&
                        y != '' &&
                        x < surface &&
                        x >= 0 &&
                        y < surface &&
                        y >= 0
                            ? false
                            : true
                    "
                    color="accent"
                    block
                    rounded
                    x-large
                    @click="setup()"
                >
                    GENERATE
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script>
export default {
    name: 'IndexPage',
    data() {
        return {
            surface: '',
            x: '',
            y: '',
            direction: 0,
            dialog: false,
        }
    },

    mounted() {
        this.destroy()

        console.log('X: ' + this.$store.state.x)
        console.log('Y: ' + this.$store.state.y)
        console.log('Size: ' + this.$store.state.size)
        console.log('Direction: ' + this.$store.state.direction)
    },

    methods: {
        setSurface(value) {
            this.surface = value
        },
        setX(value) {
            this.x = value
        },
        setY(value) {
            this.y = value
        },
        setDirection(value) {
            this.direction = value
        },
        setup() {
            this.$store.commit('setSize', this.surface)
            this.$store.commit('setX', this.x)
            this.$store.commit('setY', this.y)
            this.$store.commit('setDirection', this.direction)

            $nuxt.$router.push('/planet')
        },
        destroy() {
            this.$store.commit('setSize', null)
            this.$store.commit('setX', null)
            this.$store.commit('setY', null)
            this.$store.commit('setDirection', null)
        },
    },
}
</script>

<style>
.full-heigth {
    height: 100vh;
}
.h-100 {
    height: 100%;
}
</style>
