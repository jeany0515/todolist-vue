export default {
    initTodos ({ commit }, todos) {
        commit('initTodos', todos)
    },

    addTodo ({ commit }, todo) {
        commit('addTodo', todo)
    },

    updateTodo ({ commit }, id, todo) {
        commit('updateTodo', id, todo)
    }
}
