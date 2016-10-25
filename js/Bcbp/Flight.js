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
        
        let mandatory = this.props.flight.mandatoryItems;

        return (
            <Panel header={title} bsStyle="primary">
                <Form horizontal fill>
                    <Item key={mandatory.operatingCarrierPNRCode.name}      item={mandatory.operatingCarrierPNRCode} />
                    <Item key={mandatory.fromCityAirportCode.name}          item={mandatory.fromCityAirportCode} />
                    <Item key={mandatory.toCityAirportCode.name}            item={mandatory.toCityAirportCode} />
                    <Item key={mandatory.operatingCarrierDesignator.name}   item={mandatory.operatingCarrierDesignator} />
                    <Item key={mandatory.flightNumber.name}                 item={mandatory.flightNumber} />
                    <Item key={mandatory.dateOfFlight.name}                 item={mandatory.dateOfFlight} />
                    <Item key={mandatory.compartmentCode.name}              item={mandatory.compartmentCode} />
                    <Item key={mandatory.seatNumber.name}                   item={mandatory.seatNumber} />
                    <Item key={mandatory.checkInSequenceNumber.name}        item={mandatory.checkInSequenceNumber} />
                    <Item key={mandatory.passengerStatus.name}              item={mandatory.passengerStatus} />

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