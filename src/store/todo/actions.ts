import {action, ActionType} from 'typesafe-actions';
import {
  Task
} from "./types";

export enum ActionTypes {
    ADD_TASK = 'ADD_TASK',
    DELETE_TASK = 'DELETE_TASK',
    EDIT_TODO = 'EDIT_TODO',
    EDITED_TASK = 'EDITED_TASK',
    EDITED_CANCEL = 'EDITED_CANCEL'
}

export const Actions = {
    addTodo: (text: string, completed: false) => action(ActionTypes.ADD_TASK, {
        id: Math.random(),
        text,
        completed
    } ),
    deleteTask : (payload : number) => action(ActionTypes.DELETE_TASK, payload),
    editTask : (payload: Task) => action(ActionTypes.EDIT_TODO, payload),
    editedTask: (id: number | null, text: '') => action(ActionTypes.EDITED_TASK, {id,text}),
    editedCancel: () => action(ActionTypes.EDITED_CANCEL),

};


export type ActionTypeUnion = ActionType<typeof Actions>;