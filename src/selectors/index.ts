import { createSelector } from 'reselect'

import {TodosState} from "../store/todo/types"

const getTodos = (state: TodosState) => state.todos

export const getTodosSelector = createSelector(
    [getTodos],todos => {
        return todos;
    }
)