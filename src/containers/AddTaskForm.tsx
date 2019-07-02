import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import { Actions } from '../store/todo/actions';

interface State {
    text: string
}


interface Props {
    addTodo: (text: string, completed: boolean) => void;
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
        this.props.addTodo(
            this.state.text,
            false
        );
        this.setState({
            text: ''
        });
    };

    public render() {
        return (
            <React.Fragment>
                <form onSubmit={this.onSubmitHendler}>
                    <input
                        type='text'
                        onChange={this.changeHendle}
                        value={this.state.text}
                    />
                    <input type='submit' value='add' style={{marginLeft: 10}} />
                </form>
            </React.Fragment>
        );
    }
}

const mapDispatchToProps = Actions;

export default connect(null, mapDispatchToProps)(AddTaskForm);