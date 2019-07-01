import { action } from 'typesafe-actions';
import {
  ADD_TASK,
  DELETE_TASK,
  EDIT_TODO,
  Task,
  TodoActionsTypes
} from "./types";

 const addTodo = (payload: Task): TodoActionsTypes => action(ADD_TASK, payload );
// export function addTodo(payload: Task): TodoActionsTypes {
//   return { type: ADD_TASK, payload };
// }


 const deleteTask = (payload : number): TodoActionsTypes => action(DELETE_TASK, payload)
// export function deleteTask(id: number): TodoActionsTypes {
//   return {
//     type: DELETE_TASK,
//     id
//   };
// }

 const editTask = (payload: Task): TodoActionsTypes => action(EDIT_TODO, payload)

// export function editTask(payload: any): TodoActionsTypes {
//   return {
//     type: EDIT_TODO,
//     payload
//   };
// }

export {
  editTask,
    deleteTask,
    addTodo
}