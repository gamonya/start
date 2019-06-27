import {ADD_TASK,DELETE_TASK, Task, TodoActionsTypes} from "./types";

export function addTodo(payload: Task): TodoActionsTypes {
    return { type: ADD_TASK, payload }
}

export function deleteTask(id: number): TodoActionsTypes {
    return {
        type: DELETE_TASK,
        id
    }
}