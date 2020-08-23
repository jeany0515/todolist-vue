<template>
    <div id="app">
        <h1>To Do List</h1>
        <p>Simple Todo List with adding and filter by different status.</p>
        <input class="todo-input" v-model.trim="todoContent">
        <button @click="addTodoItem">Add</button>
        <router-view></router-view>
        <div class="todo-filter">
            <router-link :to="{ name: 'todos', params: { filter: 'all'}}">All</router-link>
            <router-link :to="{ name: 'todos', params: { filter: 'active'}}">Active</router-link>
            <router-link :to="{ name: 'todos', params: { filter: 'completed'}}">Completed</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                todoContent: ''
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
</style>
