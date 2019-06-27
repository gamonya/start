import React from 'react';
import { connect } from 'react-redux'

import {AppState} from "./store";
import { Task} from "./store/todo/types";
import {getTodosSelector} from "./selectors";

import {deleteTask} from "./store/todo/actions"

import './App.css';

interface Props {
    todos: Task[],
    deleteTask: (id: number) => void
}

class App extends React.Component<Props, {}> {
    public componentDidMount(): void {
        console.log(this.props)
    }

    public render() {
    return (
      <div className="App">
          {this.props.todos.map((item) => item.text)}
          <br/>
          <button onClick={() => this.props.deleteTask(1)}>del</button>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => {
    return {
        todos: getTodosSelector(state.todoApp)
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        deleteTask: (id: number) => {
            dispatch(deleteTask(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
