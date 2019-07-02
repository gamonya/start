import { TodosState } from './types';


import { ActionTypes } from './actions'

import { ActionTypeUnion } from './actions'

const initialState: TodosState = {
    editedId: null,
    entities: {
        '1': {
            id: 1,
            text: 'asd'
        },
        '2': {
            id: 2,
            text: 'gkgkgkgkg'
        }
    },
    ids: [1, 2]
};

export function reducer(
    state = initialState,
    action: ActionTypeUnion
): TodosState {
    switch (action.type) {

        case ActionTypes.ADD_TASK: {
            const entities ={
                ...state.entities,
                [action.payload.id]: action.payload
            }

            const ids = [...state.ids, action.payload.id]

            return {
                ...state,
                ids,
                entities
            }
        }

        case ActionTypes.DELETE_TASK: {
            const tasksIds = state.ids.filter((item) => {
                return item !== action.payload
            })

            const tasks =  {...state.entities};
            delete tasks[action.payload]

            return {
                ...state,
                ids: tasksIds,
                entities: tasks
            }
        }
        case ActionTypes.EDIT_TODO: {
            const id = state.editedId || 1
            return {
                ...state,
                entities: {
                    ...state.entities,
                    [id] : {
                        id,
                        text: action.payload
                    }
                },
                editedId: null
            };
        }
        case ActionTypes.EDITED_TASK: {
            return {
                ...state,
                editedId: action.payload.id
            }
        }
        case ActionTypes.EDITED_CANCEL: {
            return {
                ...state,
                editedId: null
            }
        }
        default: {
            return state;
        }
    }
}