import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { AppState } from './store';

import { getTodos, getEditedID } from './store/todo/selectors';

import { Actions } from './store/todo/actions';

import AddTaskForm from './containers/AddTaskForm';
import EditTaskForm from './containers/EditTaskForm'

import './App.css';

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

const mapDispatchToProps = (dispatch: Dispatch) => ({
  deleteTask: (id: number) => dispatch(Actions.deleteTask(id)),
  editedTask: (id: number | null, text: string) => dispatch(Actions.editedTask({id, text})),
});



type Props =
    & ReturnType<typeof mapStateToProps>
    & ReturnType<typeof mapDispatchToProps>
    ;

class App extends React.PureComponent<Props, State> {

  public state: State = {
    id: null,
    editText: ''
  };

  public deleteHendler = (id: number) => {
    this.props.deleteTask(id);
  };

  public editHendler = (id: number | null, text: string) => {
    this.props.editedTask(id, text)
    this.setState({
      id,
      editText: text
    });
  };

  public render() {
    return (
      <div className='App'>

        <AddTaskForm />

        {this.props.todos.length === 0 && <h1>no tasks</h1>}

        {this.props.todos.map((item) => {
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
