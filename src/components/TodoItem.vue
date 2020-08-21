<template>
    <li>
        <span>{{index + 1}}. </span>
        <input type="checkbox" :id="index" v-model="todoItem.isChecked">
        <label :for="index">{{ todoItem.text }}</label>
    </li>
</template>

<script>
    export default {
        name: 'TodoItem',
        props: {
            index: Number,
            todoItem: {
                text: String,
                isChecked: Boolean
            },
        }
    }
</script>
