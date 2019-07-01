import React, {PureComponent} from 'react';
import { connect } from "react-redux";
import { Actions } from "../store/todo/actions";
import {Task} from "../store/todo/types";


interface State {
    text: string
}


interface Props {
    addTodo: (payload: Task) => void;
}

class AddTaskForm extends PureComponent<Props, State> {

   public state = {
        text: ''
    }

    public changeHendle = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            text: e.target.value
        });
    };


    public onSubmitHendler = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const key =  Math.random();
        this.props.addTodo({
            id: key,
            text: this.state.text,
            completed: false
        });
        this.setState({
            text: ""
        });
    };

    public render() {
        return (
            <React.Fragment>
                <form onSubmit={this.onSubmitHendler}>
                    <input
                        type="text"
                        onChange={this.changeHendle}
                        value={this.state.text}
                    />
                </form>
            </React.Fragment>
        );
    }
}

const mapDispatchToProps = Actions;

export default connect(null, mapDispatchToProps)(AddTaskForm);