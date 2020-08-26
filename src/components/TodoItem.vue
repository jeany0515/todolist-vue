<template>
    <li>
        <span>{{index + 1}}. </span>
        <input type="checkbox" :id="todoItem.id" :checked="todoItem.done" @change="toggleTodo(todoItem)">
        <label :for="todoItem.id">{{ todoItem.text }}</label>
    </li>
</template>

<script>
    import { mapActions } from "vuex"
    import { updateTodo } from "../api";
    export default {
        name: 'TodoItem',
        props: {
            index: Number,
            todoItem: {
                text: String,
                done: Boolean
            },
        },
        methods: {
            ...mapActions([
                'updateTodo',
            ]),

            toggleTodo(oldTodo) {
                const { id, done } = oldTodo
                const todo = {...oldTodo, done: !done}
                updateTodo(id, todo).then(
                    this.updateTodo(id, todo)
                )
            }
        }
    }
</script>
