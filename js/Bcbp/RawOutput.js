import React from "react";
import {Panel} from "react-bootstrap";

class RawOutput extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const title = (
            <h3>Data</h3>
        );

        return (
            <Panel header={title} bsStyle="primary">
                <h6>{this.props.rawData}</h6>
            </Panel>
        )
    }
}

export default RawOutput;