//State
export const state = () => ({
    size: null,
    x: null,
    y: null,
    direction: null,
})

//Getters
export const getters = {
    getSize(state) {
        return state.size
    },
    getX(state) {
        return state.x
    },
    getY(state) {
        return state.y
    },
    getDirection(state) {
        return state.direction
    },
}

//Actions
export const actions = {}

//Mutations
export const mutations = {
    async setSize(state, value) {
        state.size = value
    },
    async setX(state, value) {
        state.x = value
    },
    async setY(state, value) {
        state.y = value
    },
    async setDirection(state, value) {
        state.direction = value
    },
}
