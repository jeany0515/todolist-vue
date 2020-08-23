<template>
    <div id="app">
        <h1>To Do List</h1>
        <p>Simple Todo List with adding and filter by different status.</p>
        <input class="todo-input" v-model.trim="todoContent">
        <button @click="addTodoItem">Add</button>
        <TodoList :todo-list="currentList"></TodoList>
        <div class="todo-filter">
            <a @click="filter = 'all'" :class="{active: filter === 'all'}">All</a>
            <a @click="filter = 'active'" :class="{active: filter === 'active'}">Active</a>
            <a @click="filter = 'completed'" :class="{active: filter === 'completed'}">Completed</a>
        </div>
    </div>
</template>

<script>
    import TodoList from "./components/TodoList";

    const filters = {
        all: todoList => todoList,
        active: todoList => todoList.filter(todo => !todo.done),
        completed: todoList => todoList.filter(todo => todo.done)
    }

    export default {
        name: 'App',
        components: {TodoList},
        data() {
            return {
                todoContent: '',
                filter: 'all'
            }
        },
        computed: {
            todoList () {
                return this.$store.state.todoList
            },
            currentList () {
                return filters[this.filter](this.todoList)
            }
        },
        methods: {
            addTodoItem() {
                if (this.todoContent.length > 0) {
                    this.$store.dispatch('addTodo', this.todoContent)
                    this.todoContent = '';
                }
            },
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    .todo-input {
        width: 600px;
        height: 36px;
        margin-right: 30px;
        margin-bottom: 30px;
    }

    .todo-filter a {
        display: inline-block;
        margin-right: 10px;
        cursor: pointer;
    }

    .todo-filter .active {
        color: palevioletred;
        font-weight: bold;
    }
</style>
