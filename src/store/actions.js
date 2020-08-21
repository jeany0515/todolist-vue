export default {
    addTodo ({ commit }, text) {
        commit('addTodo', {
            text,
            done: false
        })
    },

    toggleTodo ({ commit }, index) {
        commit('toggleTodo', index)
    }
}
