import { createSelector } from "reselect";

import { Task } from "../store/todo/types";

const getTodos = (state: Task[]) => state;

export const getTodosSelector = createSelector(
  [getTodos],
  (todos) => {
    return todos;
  }
);
