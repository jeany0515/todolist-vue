<template>
    <li>
        <span>{{index + 1}}. </span>
        <input type="checkbox" :id="index" :checked="todoItem.done" @change="toggleTodo(index)">
        <label :for="index">{{ todoItem.text }}</label>
    </li>
</template>

<script>
    import { mapActions } from "vuex"
    export default {
        name: 'TodoItem',
        props: {
            index: Number,
            todoItem: {
                text: String,
                done: Boolean
            },
        },
        methods: mapActions([
            'toggleTodo',
        ]),
    }
</script>
