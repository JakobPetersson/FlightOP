import React from "react";
import {Row} from "react-bootstrap";
import Flight from "./Flight";

class Flights extends React.Component {
    constructor(props) {
        super(props);
     }

    render() {
        return (
            <Row className="show-grid">
                {this.props.flights.map((flight) => (
                    <Flight key={flight.id} flight={flight} />
                ))}
            </Row>
        )
    }
}

export default Flights;