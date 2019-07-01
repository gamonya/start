import { TodosState } from './types';


import { ActionTypes } from "./actions"

import { ActionTypeUnion } from './actions'

const initialState: TodosState = {
      editInputShowed: false,
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

      return Object.assign({}, state, {
        tasks
      })
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
            todo.id === action.payload.id
                ? {...todo, text: action.payload.text}
                : todo);


      return {
        ...state, tasks
      };
    }
      case ActionTypes.EDIT_INPUT_TOGGLE: {

          return {
              ...state,
              editInputShowed: action.payload
          }
      }
    default: {
      return state;
    }
  }
}