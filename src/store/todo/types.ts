export interface Task {
  id: number;
  text: string;
}

export interface TodosState {
  tasks: Task[];
  edited: {
    id: number |null,
    text: string | ''
  }
}
