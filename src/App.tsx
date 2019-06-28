import React from "react";
import { connect } from "react-redux";

import { AppState } from "./store";
import { Task } from "./store/todo/types";
import { getTodosSelector } from "./selectors";

import { deleteTask, addTodo } from "./store/todo/actions";

import "./App.css";

interface Props {
  todos: Task[];
  deleteTask: (id: number) => void;
  addTodo: (payload: Task) => void;
}

interface State {
  text: string;
}

class App extends React.Component<Props, State> {
  public state = {
    text: ""
  };

  public componentDidMount(): void {
    console.log(this.props.todos);
  }
  public changeHendle = (e: any) => {
    this.setState({
      text: e.target.value
    });
  };

  public onSubmitHendler = (e: any) => {
    e.preventDefault();
    const key = this.props.todos.length + 3 + Math.random();
    this.props.addTodo({
      id: key,
      text: this.state.text,
      completed: false
    });
    this.setState({
      text: ""
    });
  };

  public deleteHendler = (id: number) => {
    this.props.deleteTask(id);
  };

  public render() {
    return (
      <div className="App">
        <form onSubmit={this.onSubmitHendler}>
          <input type="text" onChange={this.changeHendle} />
        </form>
        {this.props.todos.map((item) => {
          return (
            <p
              title="double click to delete"
              className="items-msg"
              key={item.id}
              onDoubleClick={() => this.deleteHendler(item.id)}>
              {item.text}
            </p>
          );
        })}
        <br />
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => {
  return {
    todos: getTodosSelector(state.todoApp)
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    deleteTask: (id: number) => {
      dispatch(deleteTask(id));
    },
    addTodo: (payload: Task) => {
      dispatch(addTodo(payload));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
