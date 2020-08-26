const mutations = {
    initTodos (state, todos) {
        state.todoList.push(...todos)
    },

    addTodo (state, todo) {
        state.todoList.push(todo)
    },

    updateTodo (state, id, todo) {
        const index = state.todoList.findIndex(todo => todo.id === id)

        state.todoList.splice(index, 1, todo)
    }
}

export default mutations
