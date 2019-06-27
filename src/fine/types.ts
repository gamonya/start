interface AddAction {
    type: "ADD",
    payload: any
}

interface DeleteAction {
    type:  "DEL",
    payload: any
}


export type  Action = AddAction | DeleteAction;