import React from "react";
import {Panel, Form} from "react-bootstrap";
import Item from "./items/item";

class MandatoryFlight extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const title = (
            <h3>Flight {this.props.flightId} Mandatory Information</h3>
        );

        const items = this.props.mandatoryFlightItems;

        return (
            <Panel header={title} bsStyle="primary">
                <Form horizontal fill>
                    <Item item={items.operatingCarrierPNRCode()}
                          dataChange={this.props.bcbpChange}/>
                    <Item item={items.fromCityAirportCode()}
                          dataChange={this.props.bcbpChange}/>
                    <Item item={items.toCityAirportCode()}
                          dataChange={this.props.bcbpChange}/>
                    <Item item={items.operatingCarrierDesignator()}
                          dataChange={this.props.bcbpChange}/>
                    <Item item={items.flightNumber()}
                          dataChange={this.props.bcbpChange}/>
                    <Item item={items.dateOfFlight()}
                          dataChange={this.props.bcbpChange}/>
                    <Item item={items.compartmentCode()}
                          dataChange={this.props.bcbpChange}/>
                    <Item item={items.seatNumber()}
                          dataChange={this.props.bcbpChange}/>
                    <Item item={items.checkInSequenceNumber()}
                          dataChange={this.props.bcbpChange}/>
                    <Item item={items.passengerStatus()}
                          dataChange={this.props.bcbpChange}/>

                    <Item item={items.allConditionalSize()}
                          dataChange={this.props.bcbpChange}/>
                </Form>
            </Panel>
        )
    }
}

export default MandatoryFlight;