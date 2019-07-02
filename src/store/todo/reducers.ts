import { TodosState } from './types';


import { ActionTypes } from "./actions"

import { ActionTypeUnion } from './actions'

const initialState: TodosState = {
    edited: {
          id: null,
          text: ''
      },
      tasks: [
        {
          id: 1,
          text: 'as',
          completed: false
        },
        {
          id: 2,
          text: 'asOas',
          completed: false
        }
      ]
};

export function reducer(
  state = initialState,
  action: ActionTypeUnion
): TodosState {
  switch (action.type) {

    case ActionTypes.ADD_TASK: {
        const tasks =  [
            ...state.tasks,
            action.payload
        ]

      return Object.assign({}, state, {tasks})
    }

    case ActionTypes.DELETE_TASK: {
        const tasks = state.tasks.filter((item) => item.id !== action.payload);

        return {
            ...state,
            tasks
        }
    }
    case ActionTypes.EDIT_TODO: {
        const tasks = state.tasks.map((todo) =>
            todo.id === action.payload.id ? {...todo, text: action.payload.text}  : todo);


      return {
        ...state, tasks
      };
    }
      case ActionTypes.EDITED_TASK: {
          const edited =  {
              id: action.payload.id,
                  text: action.payload.text
          }

          return {
              ...state,
              edited
          }
      }
      case ActionTypes.EDITED_CANCEL: {
          const edited = {
              ...state.edited,
              id: null
          }

          return {
              ...state,
              edited
          }
      }
    default: {
      return state;
    }
  }
}