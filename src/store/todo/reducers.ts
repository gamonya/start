import { ADD_TASK, DELETE_TASK, TodoActionsTypes, Task } from "./types";

const initialState: Task[] = [
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
];

// function updateObject(oldObject: TodosState, newValues: {}) {
//     return Object.assign({}, oldObject, newValues)
// }

export default function todoApp(
  state = initialState,
  action: TodoActionsTypes
): Task[] {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload];
    case DELETE_TASK:
      return state.filter((item) => item.id !== action.id);

    default:
      return state;
  }
}
