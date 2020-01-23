import { TODO_ACTION } from './'

export const addTodo = (data) => ({
    type: TODO_ACTION.ADD,
    payload: { text: data, completed: false }
});

export const deleteTodo = (index) => ({
    type: TODO_ACTION.DELETE,
    payload: index
})
export const doneTodo = (index) => ({
    type: TODO_ACTION.DONE,
    payload: index
})

export const magicTodo = (data) => {
    return (dispatch, getState) => {
        dispatch(addTodo(data))
        setTimeout(() => {
            dispatch(doneTodo(0))
        }, 2000);
        setTimeout(() => {
            dispatch(deleteTodo(0))
        }, 5000);

    }
}

export default {
    addTodo,
    deleteTodo,
    doneTodo,
    magicTodo
}
