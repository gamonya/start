import React from "react";
// import { Dispatch } from "redux";
import { connect } from "react-redux";

import { AppState } from "./store";
import { Task, TodosState } from "./store/todo/types";
import { getTodos } from "./store/todo/selectors";

import { deleteTask, addTodo, editTask } from "./store/todo/actions";

import "./App.css";

interface Props {
  todos: TodosState;
  deleteTask: (id: number) => void;
  addTodo: (payload: Task) => void;
  editTask: (payload: any) => void;
}

interface State {
  text: string;
  editText: string;
  id: number | null;
  editInputShow: boolean;
}

class App extends React.PureComponent<Props, State> {

  public state: State = {
    text: "",
    editText: "",
    id: null,
    editInputShow: false
  };


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

              value={this.state.editText}
            />
          </form>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => {
  return {
    todos: getTodos(state)
  };
};
// const mapDispatchToProps = (dispatch: Dispatch) => {
//   return {
//     deleteTask: (id: number) => {
//       dispatch(deleteTask(id));
//     },
//     addTodo: (payload: Task) => {
//       dispatch(addTodo(payload));
//     },
//     editTask: (payload: any) => {
//       dispatch(editTask(payload));
//     }
//   };
// };
const mapDispatchToProps = { deleteTask, addTodo, editTask };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
