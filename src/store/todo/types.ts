// CONSTS
export const ADD_TASK = "ADD_TASK"
export const DELETE_TASK = "DELETE_TASK"

export interface Task {
    id: number,
    text: string,
    completed: boolean
}

export interface TodosState {
    todos: Task[]
}

interface AddTaskAction {
    type: typeof ADD_TASK,
    payload: Task
}

interface DeleteTaskAction {
    type: typeof DELETE_TASK,
    id: number
}

export type TodoActionsTypes = AddTaskAction | DeleteTaskAction

