import axios from 'axios'

axios.interceptors.response.use(
    (response) => {
        return Promise.resolve(response.data)
    },
    (error) => {
        console.log(error)
    }
)


export const getTodoList = () => {
    return axios.get('http://localhost:3000/todos')
}

export const addTodo = (todo) => {
    return axios.post('http://localhost:3000/todos', todo)
}

export const updateTodo = (id, todo) => {
    return axios.put(`http://localhost:3000/todos/${id}`, todo)
}
