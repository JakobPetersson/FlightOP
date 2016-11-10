import React from "react";
import FlightMandatory from "./flight-mandatory";
import FlightConditional from "./flight-conditional";

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