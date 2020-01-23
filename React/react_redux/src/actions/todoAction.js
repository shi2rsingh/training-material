import { TODO_ACTION } from './'

export const addTodo = (data) => ({
    type: TODO_ACTION.ADD,
    payload: { title: data, completed: false }
});

export const deleteTodo = (index) => ({
    type: TODO_ACTION.DELETE,
    payload: index
})
export const doneTodo = (index) => ({
    type: TODO_ACTION.DONE,
    payload: index
})

export default {
    addTodo,
    deleteTodo,
    doneTodo
}
