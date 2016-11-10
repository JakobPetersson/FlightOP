import React from "react";
import {Panel, Form} from "react-bootstrap";
import Item from "./item/Item";

class FlightMandatory extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const title = (
            <h3>Flight {this.props.flight.id()} Mandatory</h3>
        );

        let mandatory = this.props.flight.mandatoryItems();

        return (
            <Panel header={title} bsStyle="primary">
                <Form horizontal fill>
                    <Item item={mandatory.operatingCarrierPNRCode()}
                          dataChange={this.props.dataChange}/>
                    <Item item={mandatory.fromCityAirportCode()}
                          dataChange={this.props.dataChange}/>
                    <Item item={mandatory.toCityAirportCode()}
                          dataChange={this.props.dataChange}/>
                    <Item item={mandatory.operatingCarrierDesignator()}
                          dataChange={this.props.dataChange}/>
                    <Item item={mandatory.flightNumber()}
                          dataChange={this.props.dataChange}/>
                    <Item item={mandatory.dateOfFlight()}
                          dataChange={this.props.dataChange}/>
                    <Item item={mandatory.compartmentCode()}
                          dataChange={this.props.dataChange}/>
                    <Item item={mandatory.seatNumber()}
                          dataChange={this.props.dataChange}/>
                    <Item item={mandatory.checkInSequenceNumber()}
                          dataChange={this.props.dataChange}/>
                    <Item item={mandatory.passengerStatus()}
                          dataChange={this.props.dataChange}/>

                    <Item item={mandatory.allConditionalSize()}
                          dataChange={this.props.dataChange}/>
                </Form>
            </Panel>
        )
    }
}

export default FlightMandatory;