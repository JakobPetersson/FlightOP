import React from "react";
import {Panel, FormGroup, FormControl} from "react-bootstrap";

class RawInput extends React.Component {
    constructor(props) {
        super(props);
        this.dataChange = this.dataChange.bind(this);
    }

    dataChange(ev) {
        this.props.setData(ev.target.value);
    }

    render() {
        const title = (
            <h3>Data Input</h3>
        );

        return (
            <Panel header={title} bsStyle="primary">
                <form>
                    <FormGroup>
                        <FormControl componentClass="textarea"
                                     value={this.props.rawData}
                                     onChange={this.dataChange} />
                    </FormGroup>
                </form>
            </Panel>
        )
    }
}

export default RawInput;