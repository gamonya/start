import {AppState} from '../index';


// export const getTodos = (state: AppState) => state.todos;

export const getEditedID = (state: AppState) => state.todos.editedId;

export const getEditedText =(state: AppState) => {
    if(state.todos.editedId !== null) {
        const id = state.todos.editedId;
        return state.todos.entities[id].text;
    } else {
        return ''
    }

};


export const getTodos = (state: AppState) => {
    const tasks = [];
    for (const key in state.todos.entities){
        if(state.todos.entities.hasOwnProperty(key))  {
            tasks.push({ id: state.todos.entities[key].id, text: state.todos.entities[key].text})
        }
    }

    return tasks

};