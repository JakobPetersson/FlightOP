import React from "react";
import {Panel, Form} from "react-bootstrap";
import FlightMandatory from "./FlightMandatory"
import FlightConditional from "./FlightConditional"

class Flight extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <FlightMandatory flight={this.props.flight}
                                 dataChange={this.props.dataChange}/>
                <FlightConditional flight={this.props.flight}
                                   dataChange={this.props.dataChange}/>
            </div>
        )
    }
}

export default Flight;