import { AppState } from '../index';


export const getTodos = (state: AppState) => state.todos;

export const getEditedID = (state: AppState) => state.todos.edited.id
export const getEditedText =(state: AppState) => state.todos.edited.text