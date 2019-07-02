

enum possibleStoreActions {
    Add = 'ADD',
    Del = 'DEL',
}


interface Action<P ,T extends possibleStoreActions> {
    type: T,
    payload: P
}

const action: Action<string, possibleStoreActions.Add >= {
    payload: 'some mo',
    type: possibleStoreActions.Add
};
