import { createSelector } from "reselect";

import { Task } from "./types";

const getTodos = (state: Task[]) => state;

export const getTodosSelector = createSelector(
  [getTodos],
  (todos) => {
    return todos;
  }
);
