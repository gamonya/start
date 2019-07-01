export interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export interface TodosState {
  tasks: Task[];
}
