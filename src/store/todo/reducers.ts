import {
  ADD_TASK,
  DELETE_TASK,
  EDIT_TODO,
  TodoActionsTypes,
    TodosState
} from "./types";

const initialState: TodosState = {
  tasks: [
    {
      id: 1,
      text: "as",
      completed: false
    },
    {
      id: 2,
      text: "asOas",
      completed: false
    }
  ]
};

export function reducer(
  state = initialState,
  action: TodoActionsTypes
) {
  switch (action.type) {
    case ADD_TASK:
      return Object.assign({}, state, {
        tasks: [
          ...state.tasks,
          action.payload
        ]
      })
    case DELETE_TASK:
      return {...state, tasks:[...state.tasks.filter((item) => item.id !== action.payload)]};
    case EDIT_TODO:
      return {...state, tasks:[...state.tasks.map((todo) =>
          todo.id === action.payload.id
              ? { ...todo, text: action.payload.text }
              : todo
      )]};
    default:
      return state;
  }
}
// { ...todo, text: action.payload.text }