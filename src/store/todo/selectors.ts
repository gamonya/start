import { AppState } from '../index';


export const getTodos = (state: AppState) => state.todos;

export const isInputVisible = (state: AppState) => state.todos.editInputShowed