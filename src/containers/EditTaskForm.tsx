import React, {Component} from 'react';
import { connect } from "react-redux";
import {AppState} from "../store";

import { Actions } from "../store/todo/actions";
import {getEditedID, getEditedText} from "../store/todo/selectors";

interface Props {
    editedId: number | null;
    editedText: string | '';
    editTask: (payload: {}) => void;
    editedTask: (id: number | null, text: string | '') => void;
    editedCancel: () => void;
}

interface State {
    editText: string;
    id: number | null
}
class EditTaskForm extends Component<Props, State> {


    public state = {
        editText: this.props.editedText,
        id: this.props.editedId
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
            id: this.state.id,
            text: this.state.editText
        };
        this.props.editTask(resEdit);
        this.props.editedTask(null, '')
      this.setState({
        editText: ""
      });
    };
    public handleCancel = () => {
        this.props.editedCancel()
    }


    public handleBlure =() => {
        this.props.editedTask(null, '')
    }

    public handleSuccess = () => {
        this.props.editTask({
            id: this.state.id,
            text: this.state.editText
        })
    }

    public render() {
        return (
            <React.Fragment>
                <form onSubmit={this.onSubmitEdit}>
                    <input
                        type="text"
                        onChange={this.onEditHendler}
                        ref={this.stepInput}
                        // onBlur={this.handleBlure}
                        value={this.state.editText}
                    />
                    <br/>
                    <br/>
                    <input type="button" value="edit" onClick={this.handleSuccess} style={{marginRight:10}}/>
                    <input type="button" value="cancel" onClick={this.handleCancel} />
                </form>
            </React.Fragment>
        );
    }
}

// STORE PROPS
const mapStateToProps = (state: AppState) => {
    return {
        editedId: getEditedID(state),
        editedText: getEditedText(state)
    };
};

const mapDispatchToProps = Actions;

export default connect(mapStateToProps, mapDispatchToProps)(EditTaskForm);