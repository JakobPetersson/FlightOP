import React from "react";
import {Panel, Form} from "react-bootstrap";
import Item from "./Item";

class Flight extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const title = (
            <h3>Flight {this.props.flight.id}</h3>
        );

        return (
            <Panel header={title} bsStyle="primary">
                <Form horizontal fill>
                    <Item key={this.props.flight.operatingCarrierPNRCode.name} item={this.props.flight.operatingCarrierPNRCode} />
                    <Item key={this.props.flight.fromCityAirportCode.name} item={this.props.flight.fromCityAirportCode} />
                    <Item key={this.props.flight.toCityAirportCode.name} item={this.props.flight.toCityAirportCode} />
                    <Item key={this.props.flight.operatingCarrierDesignator.name} item={this.props.flight.operatingCarrierDesignator} />
                    <Item key={this.props.flight.flightNumber.name} item={this.props.flight.flightNumber} />
                    <Item key={this.props.flight.dateOfFlight.name} item={this.props.flight.dateOfFlight} />
                    <Item key={this.props.flight.compartmentCode.name} item={this.props.flight.compartmentCode} />
                    <Item key={this.props.flight.seatNumber.name} item={this.props.flight.seatNumber} />
                    <Item key={this.props.flight.checkInSequenceNumber.name} item={this.props.flight.checkInSequenceNumber} />
                    <Item key={this.props.flight.passengerStatus.name} item={this.props.flight.passengerStatus} />
                    <Item key={this.props.flight.sizeOfConditionalItems.name} item={this.props.flight.sizeOfConditionalItems} />

                    <Item key={this.props.flight.airlineNumericCode.name} item={this.props.flight.airlineNumericCode} />
                    <Item key={this.props.flight.documentFormOrSerialNumber.name} item={this.props.flight.documentFormOrSerialNumber} />
                    <Item key={this.props.flight.selecteeIndicator.name} item={this.props.flight.selecteeIndicator} />
                    <Item key={this.props.flight.internationalDocumentationVerification.name} item={this.props.flight.internationalDocumentationVerification} />
                    <Item key={this.props.flight.marketingCarrierDesignator.name} item={this.props.flight.marketingCarrierDesignator} />
                    <Item key={this.props.flight.frequentFlyerAirlineDesignator.name} item={this.props.flight.frequentFlyerAirlineDesignator} />
                    <Item key={this.props.flight.frequentFlyerNumber.name} item={this.props.flight.frequentFlyerNumber} />
                    <Item key={this.props.flight.idOrAdIndicator.name} item={this.props.flight.idOrAdIndicator} />
                    <Item key={this.props.flight.freeBaggageAllowance.name} item={this.props.flight.freeBaggageAllowance} />
                    <Item key={this.props.flight.fastTrack.name} item={this.props.flight.fastTrack} />
                    <Item key={this.props.flight.forIndividualAirlineUse.name} item={this.props.flight.forIndividualAirlineUse} />
                </Form>
            </Panel>
        )
    }
}

export default Flight;