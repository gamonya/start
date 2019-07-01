import {action, ActionType} from 'typesafe-actions';
import {
  Task
} from "./types";

export enum ActionTypes {
    ADD_TASK = 'ADD_TASK',
    DELETE_TASK = 'DELETE_TASK',
    EDIT_TODO = 'EDIT_TODO'
}

export const Actions = {
    addTodo: (payload: Task) => action(ActionTypes.ADD_TASK, payload ),
    deleteTask : (payload : number) => action(ActionTypes.DELETE_TASK, payload),
    editTask : (payload: Task) => action(ActionTypes.EDIT_TODO, payload)

};


export type ActionTypeUnion = ActionType<typeof Actions>;