// CONSTS
export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const EDIT_TODO = "EDIT_TODO";

export interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export interface TodosState {
  tasks: Task[];
  edited: Task | {};
}

interface AddTaskAction {
  type: typeof ADD_TASK;
  payload: Task;
}
interface EdidTask {
  type: typeof EDIT_TODO;
  payload: {
    id: number;
    text: string;
  };
}
interface DeleteTaskAction {
  type: typeof DELETE_TASK;
  payload: number;
}

export type TodoActionsTypes = AddTaskAction | DeleteTaskAction | EdidTask;
