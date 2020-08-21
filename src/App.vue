<template>
    <div id="app">
        <h1>To Do List</h1>
        <p>Simple Todo List with adding and filter by different status.</p>
        <input v-model.trim="todoContent">
        <button @click="addTodoItem">Add</button>
        <TodoList :todo-list="todoList"></TodoList>
    </div>
</template>

<script>
    import TodoList from "./components/TodoList";

    export default {
        name: 'App',
        components: {TodoList},
        data() {
            return {
                todoContent: '',
                todoList: []
            }
        },
        methods: {
            addTodoItem() {
                if (this.todoContent.length > 0) {
                    this.todoList.push({isChecked: false, text: this.todoContent});
                    this.todoContent = '';
                }
            }
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
</style>
