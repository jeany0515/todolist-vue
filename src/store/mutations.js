const mutations = {
    addTodo (state, todo) {
        state.todoList.push(todo)
    },

    toggleTodo (state, index) {
        const todo = state.todoList[index]

        state.todoList.splice(index, 1, {
            ...todo,
            done: !todo.done
        })
    }
}

export default mutations
