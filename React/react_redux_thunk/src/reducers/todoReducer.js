import { TODO_ACTION } from '../actions'

const defaultState = {
    taskList: [
        { text: 'React', completed: false },
        { text: 'Redux', completed: false },
        { text: 'React-Redux', completed: false },
        { text: 'Assessment', completed: true }
    ],
}

const todoReducer = (state = defaultState, action) => {
    switch (action.type) {
        case TODO_ACTION.ADD: return {
            ...state,
            taskList: [...state.taskList, action.payload]
        }
        case TODO_ACTION.DONE: {
            const array = [...state.taskList];
            array[action.payload].completed = true;
            return {
                ...state,
                taskList: array
            }
        }
        case TODO_ACTION.DELETE: {
            const newList = [...state.taskList];
            newList.splice(action.payload, 1);

            return {
                ...state,
                taskList: newList
            }
        }

        default: return state
    };
}

export default todoReducer;
