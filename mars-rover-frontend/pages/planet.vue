<template>
    <v-container fluid>
        <v-container>
            <v-row>
                <v-col cols="1">
                    <v-btn icon color="accent" to="/">
                        <v-icon color="primary">mdi-chevron-left</v-icon>
                    </v-btn>
                </v-col>
                <v-col cols="10" class="text-center">
                    <h1>Mars Rover</h1>
                </v-col>
                <v-col cols="1">
                    <v-btn icon color="accent" @click="reset()">
                        <v-icon color="primary">mdi-refresh</v-icon>
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>

        <v-row>
            <v-col class="d-flex flex-column align-center" cols="12" lg="6">
                <v-progress-circular
                    indeterminate
                    color="primary"
                    :size="70"
                    :width="7"
                    v-if="loading"
                ></v-progress-circular>
                <v-simple-table v-else class="transparent">
                    <Surface :planet="planet" :rover="rover" />
                </v-simple-table>
            </v-col>
            <v-col cols="12" lg="6">
                <div class="mb-5">
                    <RoverInfo
                        :x="rover.x"
                        :y="rover.y"
                        :status="rover.status"
                        :collision="rover.collision"
                        v-on:openActionList="actionList = true"
                    />
                </div>
                <v-dialog v-model="actionList" width="600px">
                    <v-card color="warning" class="overflow-auto" flat>
                        <v-card-title> List of actions: </v-card-title>
                        <v-card-text>
                            <v-list color="transparent">
                                <ActionsList
                                    v-for="action in rover.actions"
                                    :key="action"
                                    :action="action"
                                />
                            </v-list>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn
                                color="accent"
                                block
                                rounded
                                @click="actionList = false"
                                >CLOSE</v-btn
                            >
                        </v-card-actions>
                    </v-card>
                </v-dialog>

                <v-divider></v-divider>

                <p
                    class="text-center font-weight-bold secondary--text mt-5"
                    v-if="rover.collision"
                >
                    Rover is stuck. Reset the planet
                </p>

                <v-btn
                    color="secondary"
                    class="mb-5 mt-5"
                    block
                    rounded
                    :disabled="rover.collision"
                    @click="run()"
                >
                    RUN
                </v-btn>

                <MovementPanel
                    :collision="rover.collision"
                    v-on:setAction="setAction($event)"
                />

                <v-row class="mt-3">
                    <v-col cols="12" md="6"> </v-col>
                    <v-col cols="12" md="6"></v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            loading: false,
            actionList: false,
            rover: {
                x: null,
                y: null,
                direction: null,
                status: null,
                collision: null,
                actions: [],
            },
            planet: {
                surface: null,
                size: null,
            },
        }
    },

    beforeMount() {
        this.setup()
    },
    methods: {
        setAction(value) {
            this.rover.actions.push(value)
        },
        setup() {
            this.loading = true
            console.log('X: ' + this.$store.state.x)
            console.log('Y: ' + this.$store.state.y)
            console.log('Size: ' + this.$store.state.size)
            console.log('Direction: ' + this.$store.state.direction)

            this.$axios
                .$post('http://localhost:6990/setup', {
                    x: this.$store.state.x,
                    y: this.$store.state.y,
                    size: this.$store.state.size,
                    direction: this.$store.state.direction,
                })
                .then((response) => {
                    this.planet.size = response.planet.size
                    this.rover.x = response._x
                    this.rover.y = response._y
                    this.rover.direction = response._direction
                    this.planet.surface = response.planet.surface
                    this.rover.status = response._status
                    this.rover.collision = response._collision
                    this.loading = false
                })
        },
        reset() {
            this.rover.actions = []
            this.setup()
        },
        run() {
            this.$axios
                .$post('http://localhost:6990/move', {
                    movements: this.rover.actions,
                })
                .then((response) => {
                    this.planet.size = response.planet.size
                    this.rover.x = response._x
                    this.rover.y = response._y
                    this.rover.direction = response._direction
                    this.planet.surface = response.planet.surface
                    this.rover.status = response._status
                    this.rover.collision = response._collision

                    this.rover.actions = []
                    this.loading = false
                })
        },
    },
}
</script>

<style scoped></style>
