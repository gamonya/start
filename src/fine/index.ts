// import {Action} from "./types"
//
//

// type Next = "Add" | "Del"
//

// interface Action {
//     type: string
// }

enum possibleStoreActions {
    Add = 'ADD',
    Del = 'DEL',
}


interface Action<P ,T extends possibleStoreActions> {
    type: T,
    payload: P
}

const action: Action<string, possibleStoreActions.Add >= {
    payload: "some mo",
    type: possibleStoreActions.Add
};

//
// function transformAction(act: Action, nextAction: Next): object {
//     let res: {};
//     const typeYo: string = possibleStoreActions[nextAction]
//     res = {type: typeYo, payload: act.payload}
//     return res
// }
//
//
//
//
//
// const crah = transformAction(action, "Del")
//

