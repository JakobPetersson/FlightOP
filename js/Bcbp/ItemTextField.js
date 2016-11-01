import React from "react";
import {FormControl} from "react-bootstrap";

class ItemTextField extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: this.props.value };
        this.valueChange = this.valueChange.bind(this);
        this.keyWasPressed = this.keyWasPressed.bind(this);
        this.focusRemoved = this.focusRemoved.bind(this);
        this.doneEditing = this.doneEditing.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.state.value) {
            this.setState({value: nextProps.value});
        }
    }

    valueChange(ev) {
        this.setState({value: ev.target.value});
    }

    keyWasPressed(ev) {
        if (ev.keyCode === 13) {
            this.doneEditing();
        }
    }

    focusRemoved() {
        this.doneEditing();
    }

    doneEditing() {
        this.props.dataChange(this.state.value);
    }

    render() {
        return (
            <FormControl type="text"
                         value={this.state.value}
                         maxLength={this.props.maxLength}
                         onChange={this.valueChange}
                         onKeyUp={this.keyWasPressed}
                         onBlur={this.focusRemoved}
            />
        )
    }
}

export default ItemTextField;