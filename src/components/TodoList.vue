<template>
    <ul class="todo-list">
        <TodoItem v-for="(item, index) in todoList" :key="index" :todo-item="item" :index="index"></TodoItem>
    </ul>
</template>

<script>
    import TodoItem from "./TodoItem";
    import { getTodoList } from "../api";
    import { mapActions } from "vuex";

    export default {
        name: 'TodoList',
        components: {TodoItem},
        data() {
            return {
                filter: ''
            }
        },
        mounted() {
            this.filter = this.$route.params.filter
            getTodoList().then((response) => {
                this.initTodos(response)
            })
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
        methods: mapActions(['initTodos'])
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
