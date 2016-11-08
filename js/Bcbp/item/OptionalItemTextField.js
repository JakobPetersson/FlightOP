import React from "react";
import {InputGroup} from "react-bootstrap";
import ItemTextField from "./ItemTextField";

class OptionalItemTextField extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <InputGroup>
                <InputGroup.Addon>
                    <input type="checkbox"
                           checked={this.props.enabled}
                           readOnly/>
                </InputGroup.Addon>
                <ItemTextField value={this.props.value}
                               maxLength={this.props.maxLength}
                               dataChange={this.props.dataChange}
                />
            </InputGroup>
        )
    }
}

export default OptionalItemTextField;