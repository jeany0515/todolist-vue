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
        data() {
            return {
                filter: ''
            }
        },
        computed: {
            todoList () {
                const todoList = this.$store.state.todoList;
                if (this.filter === 'active') { return todoList.filter(todo => !todo.done)}
                if (this.filter === 'completed') { return todoList.filter(todo => todo.done)}
                return todoList
            }
        },
        watch: {
            '$route' (to) {
               this.filter = to.params.filter
            }
        },
        mounted() {
            this.filter = this.$route.params.filter
        }
    }
</script>

<style>
    .todo-list {
        text-align: left;
        width: 700px;
        margin: 10px auto;
        list-style: none;
    }
</style>
