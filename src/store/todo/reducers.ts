import {ADD_TASK, DELETE_TASK, TodosState, TodoActionsTypes} from "./types";


const initialState: TodosState= {
    todos: [
        {
            id:1,
            text: "as",
            completed: false
        },
        {
            id:2,
            text: "asOas",
            completed: false
        }
    ]
}

function updateObject(oldObject: TodosState, newValues: {}) {
    return Object.assign({}, oldObject, newValues)
}



export default function todoApp(state= initialState, action: TodoActionsTypes): TodosState {
    switch (action.type) {
        case ADD_TASK:
            return updateObject(state, {
                todos: [
                    ...state.todos,
                    {   id:3,
                        text: action.payload,
                        completed: false
                    }
                ]
            })
        case DELETE_TASK:
            return {
                ...state,
                ...state.todos.slice(0, action.id), ...state.todos.slice(action.id + 1)
            }


        default:
            return state
    }

}
