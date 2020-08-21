<template>
    <div id="app">
        <h1>To Do List</h1>
        <p>Simple Todo List with adding and filter by different status.</p>
        <input v-model.trim="todoContent">
        <button @click="addTodoItem">Add</button>
        <ul class="todo-list">
            <TodoItem v-for="(item, index) in todoList" :key="index" :todo-item="item" :index="index"></TodoItem>
        </ul>
    </div>
</template>

<script>
    import TodoItem from "./components/TodoItem";

    export default {
        name: 'App',
        components: {TodoItem},
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

    .todo-list {
        text-align: left;
        margin: 10px 30%;
    }
</style>
