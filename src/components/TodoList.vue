<template>
    <ul class="todo-list">
        <TodoItem v-for="(item, index) in todoList" :key="index" :todo-item="item" :index="index"></TodoItem>
    </ul>
</template>

<script>
    import TodoItem from "./TodoItem";

    export default {
        name: 'TodoList',
        components: {TodoItem},
        props: {
            todoList: Array
        },
    }
</script>

<style>
    .todo-list {
        text-align: left;
        width: 800px;
        margin: 10px auto;
    }
</style>
