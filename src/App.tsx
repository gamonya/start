import React from 'react';
import { connect } from 'react-redux';

import { AppState } from './store';
import {  TodosState } from './store/todo/types';

import { getTodos, getEditedID } from './store/todo/selectors';

import { Actions } from './store/todo/actions';

import AddTaskForm from './containers/AddTaskForm';
import EditTaskForm from './containers/EditTaskForm'

import './App.css';

interface Props {
  todos: TodosState;
  deleteTask: (id: number) => void;
  iditedId: number | null,
  editedTask: (payload: {id: number | null, text: string}) => void

}

interface State {
  id: number | null;
  editText: string
}

// STORE PROPS
const mapStateToProps = (state: AppState) => {
  return {
    todos: getTodos(state),
    iditedId: getEditedID(state)
  };
};

const mapDispatchToProps = Actions;

class App extends React.PureComponent<Props, State> {

  public state: State = {
    id: null,
    editText: ''
  };

  public deleteHendler = (id: number) => {
    this.props.deleteTask(id);
  };

  public editHendler = (id: number | null, text: string) => {
    this.props.editedTask({id, text})
    this.setState({
      id,
      editText: text
    });
  };

  public render() {
    const { tasks } = this.props.todos;

    return (
      <div className='App'>

        <AddTaskForm />

        {tasks.length === 0 && <h1>no tasks</h1>}

        {tasks.map((item) => {
          return (
            <div className='container' key={item.id}>
              <p
                title='double click to edite'
                className='items-msg'
                onDoubleClick={() => this.editHendler(item.id, item.text)}>
                {item.text}
              </p>

              <button onClick={() => this.deleteHendler(item.id)}>del</button>
            </div>
          );
        })}
        <br />

        {this.props.iditedId && (<EditTaskForm  />)}
      </div>
    );
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
