import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Dispatch} from 'redux';
import {AppState} from '../store';

import { Actions } from '../store/todo/actions';
import {getEditedID, getEditedText} from '../store/todo/selectors';


interface State {
    editText: string;
}

// STORE PROPS
const mapStateToProps = (state: AppState, own: any) => {
    return {
        editedId: getEditedID(state),
        editedText: getEditedText(state)
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
    editTask: (text: string) => dispatch(Actions.editTask(text)),
    editedTask: (id: number | null, text: string) => dispatch(Actions.editedTask({id, text})),
    editedCancel: () => dispatch(Actions.editedCancel()),
});


type Props =
    & ReturnType<typeof mapStateToProps>
    & ReturnType<typeof mapDispatchToProps>
    ;

class EditTaskForm extends Component<Props, State> {

    public state = {
        editText: this.props.editedText,
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

        this.props.editTask(this.state.editText);
      this.setState({
        editText: ''
      });
    };

    public handleCancel = () => {
        this.props.editedCancel()
    };

    public render() {
        return (
            <React.Fragment>
                <form onSubmit={this.onSubmitEdit}>
                    <input
                        type='text'
                        onChange={this.onEditHendler}
                        ref={this.stepInput}
                        value={this.state.editText}
                    />
                    <br/>
                    <br/>
                    <input type='submit' value='edit' style={{marginRight:10}}/>
                    <input type='button' value='cancel' onClick={this.handleCancel} />
                </form>
            </React.Fragment>
        );
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(EditTaskForm);