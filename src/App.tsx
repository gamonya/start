import React from "react";
// import { Dispatch } from "redux";
import { connect } from "react-redux";

import { AppState } from "./store";
import { Task, TodosState } from "./store/todo/types";
import { getTodos } from "./store/todo/selectors";

import { Actions } from "./store/todo/actions";

import "./App.css";

interface Props {
  todos: TodosState;
  deleteTask: (id: number) => void;
  addTodo: (payload: Task) => void;
  editTask: (payload: {}) => void;
}

interface State {
  text: string;
  editText: string;
  id: number | null;
  editInputShow: boolean;
}

// STORE
const mapStateToProps = (state: AppState) => {
  return {
    todos: getTodos(state)
  };
};

const mapDispatchToProps = Actions;

class App extends React.PureComponent<Props, State> {

  public state: State = {
    text: "",
    editText: "",
    id: null,
    editInputShow: false
  };

  private stepInput: React.RefObject<HTMLInputElement> = React.createRef();

  public componentDidMount(): void {
    console.log(this.props);
  }

  public changeHendle = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      text: e.target.value
    });
  };

  public onSubmitHendler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const key = this.props.todos.tasks.length + 3 + Math.random();
    this.props.addTodo({
      id: key,
      text: this.state.text,
      completed: false
    });
    this.setState({
      text: ""
    });
  };

  // FOCUS method
  public onFocusField = (el: React.RefObject<HTMLInputElement>) => {
      el.current!.focus();
  }

  // BLUR method
  public handleBlure =() =>{
    this.setState({
      editInputShow: false
    })
  }

  public deleteHendler = (id: number) => {
    this.props.deleteTask(id);
  };

  // EDIT
  public onEditHendler = (e: React.ChangeEvent<HTMLInputElement>) => {

    this.setState({
      editText: e.target.value
    });
  };
  public editHendler = (id: number | null, text: string) => {

    setTimeout(() => this.onFocusField(this.stepInput), 1)
    this.setState({
      id,
      editInputShow: true,
      editText: text
    });
  };

  public onSubmitEdit = (e: React.SyntheticEvent) => {
    e.preventDefault();

      const resEdit = {
          id: this.state.id,
          text: this.state.editText
      };
      this.props.editTask(resEdit);
    this.setState({
      editInputShow: false,
      editText: ""
    });
  };

  public render() {
    return (
      <div className="App">
        <form onSubmit={this.onSubmitHendler}>
          <input
            type="text"
            onChange={this.changeHendle}
            value={this.state.text}
          />
        </form>
        {this.props.todos.tasks.length === 0 && <h1>no tasks</h1>}
        {this.props.todos.tasks.map((item) => {
          return (
            <div className="container" key={item.id}>
              <p
                title="double click to edite"
                className="items-msg"
                onDoubleClick={() => this.editHendler(item.id, item.text)}>
                {item.text}
              </p>

              <button onClick={() => this.deleteHendler(item.id)}>del</button>
            </div>
          );
        })}
        <br />
        {this.state.editInputShow && (
          <form onSubmit={this.onSubmitEdit}>
            <input
              type="text"
              onChange={this.onEditHendler}
              ref={this.stepInput}
              onBlur={this.handleBlure}
              value={this.state.editText}
            />
          </form>
        )}
      </div>
    );
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
