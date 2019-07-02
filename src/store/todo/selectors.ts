import { AppState } from '../index';


// export const getTodos = (state: AppState) => state.todos;

export const getEditedID = (state: AppState) => state.todos.editedId;

export const getEditedText =(state: AppState) => {
    const tasks = getTodos(state);
    let res;
    if(state.todos.editedId !== null) {
        res = tasks.filter((item: any) => item.id === state.todos.editedId);
        return res[0].text
    } else {
        return ''
    }

}


export const getTodos = (state: AppState) => {
    const tasks = []
    for (const key in state.todos.entities){
        if(state.todos.entities.hasOwnProperty(key))  {
            tasks.push({ id: state.todos.entities[key].id, text: state.todos.entities[key].text})
        }
    }

    return tasks

};