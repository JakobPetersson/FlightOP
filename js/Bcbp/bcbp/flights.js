import React from "react";
import {Row} from "react-bootstrap";
import Flight from "./flight";

class Flights extends React.Component {
    constructor(props) {
        super(props);
     }

    render() {
        return (
            <Row className="show-grid">
                {this.props.flights.map((flight) => (
                    <Flight key={flight.id}
                            flight={flight}
                            dataChange={this.props.dataChange}/>
                ))}
            </Row>
        )
    }
}

export default Flights;