<template>
    <div>
        <tr v-for="(row, i) in planet.surface" :key="i">
            <td
                v-for="(col, j) in row"
                :key="j"
                :class="'cell ' + (col != 1 ? 'tasnparent' : 'warning')"
            >
                <p style="height: 100%" class="text-center my-auto mx-auto">
                    <v-icon color="primary" v-if="i == rover.y && j == rover.x">
                        {{ icon[rover.direction] }}
                    </v-icon>
                </p>
            </td>
        </tr>
    </div>
</template>

<script>
export default {
    data() {
        return {
            icon: [
                'mdi-arrow-up',
                'mdi-arrow-right',
                'mdi-arrow-down',
                'mdi-arrow-left',
            ],
        }
    },
    props: {
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
    },
    mounted() {
        console.log(this.planet)
    },
}
</script>

<style scoped>
.cell {
    border: thin #fda600 solid !important;
    width: 50px !important;
    height: 50px !important;
    max-width: 50px !important;
    max-height: 50px !important;
}
</style>
