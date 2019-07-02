export interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export interface TodosState {
  tasks: Task[];
  edited: {
    id: number |null,
    text: string | ''
  }
}
