<template>
    <v-dialog v-model="dialog" hide-overlay persistent>
        <v-card color="warning" class="primary--text">
            <v-card-title> Mars Rover </v-card-title>
            <v-card-text>
                <p>
                    You’re part of the team that explores Mars by sending
                    remotely controlled vehicles to the surface of the planet.
                    Develop an API that translates the commands sent from earth
                    to instructions that are understood by the rover.
                </p>
                <p class="font-weight-bold">Requirements:</p>
				<p>
					<ul>
						<li>
							You are given the initial starting point(x,y) of a rover
							and the direction (N,S,E,W) it is facing.
						</li>
						<li>The rover receives a character array of commands.</li>
						<li>
							Implement commands that move the rover forward/backward
							(f,b).
						</li>
						<li>
							Implement commands that turn the rover left/right (l,r).
						</li>
						<li>
							Implement wrapping from one edge of the grid to another.
							(planets are spheres after all)
						</li>
						<li>
							Implement obstacle detection before each move to a new
							square. If a given sequence of commands encounters an
							obstacle, the rover moves up to the last possible point,
							aborts the sequence and reports the obstacle.
						</li>
					</ul>
				</p>
                

                <p class="font-weight-bold mt-3">Important:</p>
				<p>
					<ul>
						<li>Surface's value must be greater then 0</li>
						<li>X and Y values start from 0 and must be less than surface's value</li>
					</ul>
				</p>
                
            </v-card-text>
            <v-card-actions>
                <v-btn
                    block
                    class="my-3"
                    color="secondary"
                    @click="closeDialog()"
                >
                    OK
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    props: {
        dialog: false,
    },
    methods: {
        closeDialog() {
            this.$emit('closeDialog')
        },
    },
}
</script>

<style scoped></style>
