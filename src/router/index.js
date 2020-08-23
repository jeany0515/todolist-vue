import Vue from 'vue'
import Router from 'vue-router'
import TodoList from '../components/TodoList'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/todos/:filter',
            name: 'todos',
            component: TodoList
        }
    ]
})
