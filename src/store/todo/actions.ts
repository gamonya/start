import {
  ADD_TASK,
  DELETE_TASK,
  EDIT_TODO,
  Task,
  TodoActionsTypes
} from "./types";

export function addTodo(payload: Task): TodoActionsTypes {
  return { type: ADD_TASK, payload };
}

export function deleteTask(id: number): TodoActionsTypes {
  return {
    type: DELETE_TASK,
    id
  };
}

export function editTask(payload: any): TodoActionsTypes {
  return {
    type: EDIT_TODO,
    payload
  };
}
