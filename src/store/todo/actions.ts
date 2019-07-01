import {action, ActionType} from 'typesafe-actions';
import {
  Task
} from "./types";

export enum ActionTypes {
    ADD_TASK = 'ADD_TASK',
    DELETE_TASK = 'DELETE_TASK',
    EDIT_TODO = 'EDIT_TODO',
    EDIT_INPUT_TOGGLE = 'EDIT_INPUT_TOGGLE'
}

export const Actions = {
    addTodo: (payload: Task) => action(ActionTypes.ADD_TASK, payload ),
    deleteTask : (payload : number) => action(ActionTypes.DELETE_TASK, payload),
    editTask : (payload: Task) => action(ActionTypes.EDIT_TODO, payload),
    editInputToggle: (payload: boolean) => action(ActionTypes.EDIT_INPUT_TOGGLE, payload)

};


export type ActionTypeUnion = ActionType<typeof Actions>;