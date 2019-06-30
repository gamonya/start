import {
  ADD_TASK,
  DELETE_TASK,
  EDIT_TODO,
  TodoActionsTypes,
  Task
} from "./types";

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

export default function todoApp(
  state = initialState,
  action: TodoActionsTypes
): Task[] {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload];
    case DELETE_TASK:
      return state.filter((item) => item.id !== action.id);
    case EDIT_TODO:
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );
    default:
      return state;
  }
}
