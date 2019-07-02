export interface Task {
  id: number;
  text: string;
}

// export interface TodosState {
//   tasks: Task[];
//   edited: {
//     id: number |null,
//     text: string | ''
//   }
// }


export interface TodosState {
  entities: {
    [id: number]: Task
  };
  ids: number[],
  editedId:  number | null;
}
