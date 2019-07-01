import React, {Component} from 'react';
import { connect } from "react-redux";

import { Actions } from "../store/todo/actions";

interface Props {
    id: number | null,
    editText: string,
    editTask: (payload: {}) => void;
    editInputToggle: (payload: boolean) => void
}

interface State {
    editText: string;
}
class EditTaskForm extends Component<Props, State> {


    public state = {
        editText: this.props.editText,
    }

    private stepInput: React.RefObject<HTMLInputElement> = React.createRef();

    public componentDidMount(): void {
        this.stepInput.current!.focus();
    }

    public onEditHendler = (e: React.ChangeEvent<HTMLInputElement>) => {

      this.setState({
        editText: e.target.value
      });
    };

    public onSubmitEdit = (e: React.SyntheticEvent) => {
      e.preventDefault();

        const resEdit = {
            id: this.props.id,
            text: this.state.editText
        };
        this.props.editTask(resEdit);
        this.props.editInputToggle(false)
      this.setState({
        editText: ""
      });
    };

    public handleBlure =() => {
        this.props.editInputToggle(false)
    }

    public render() {
        return (
            <React.Fragment>
                <form onSubmit={this.onSubmitEdit}>
                    <input
                        type="text"
                        onChange={this.onEditHendler}
                        ref={this.stepInput}
                        onBlur={this.handleBlure}
                        value={this.state.editText}
                    />
                </form>
            </React.Fragment>
        );
    }
}

const mapDispatchToProps = Actions;

export default connect(null, mapDispatchToProps)(EditTaskForm);