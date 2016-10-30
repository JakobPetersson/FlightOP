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
        let conditional = this.props.flight.conditionalItems;

        return (
            <Panel header={title} bsStyle="primary">
                <Form horizontal fill>
                    <Item key={mandatory.operatingCarrierPNRCode.itemNr}      item={mandatory.operatingCarrierPNRCode} />
                    <Item key={mandatory.fromCityAirportCode.itemNr}          item={mandatory.fromCityAirportCode} />
                    <Item key={mandatory.toCityAirportCode.itemNr}            item={mandatory.toCityAirportCode} />
                    <Item key={mandatory.operatingCarrierDesignator.itemNr}   item={mandatory.operatingCarrierDesignator} />
                    <Item key={mandatory.flightNumber.itemNr}                 item={mandatory.flightNumber} />
                    <Item key={mandatory.dateOfFlight.itemNr}                 item={mandatory.dateOfFlight} />
                    <Item key={mandatory.compartmentCode.itemNr}              item={mandatory.compartmentCode} />
                    <Item key={mandatory.seatNumber.itemNr}                   item={mandatory.seatNumber} />
                    <Item key={mandatory.checkInSequenceNumber.itemNr}        item={mandatory.checkInSequenceNumber} />
                    <Item key={mandatory.passengerStatus.itemNr}              item={mandatory.passengerStatus} />

                    <Item key={mandatory.sizeOfAllConditional.itemNr}         item={mandatory.sizeOfAllConditional} />

                    <Item key={conditional.sizeOfConditional.itemNr}                      item={conditional.sizeOfConditional} />

                    <Item key={conditional.airlineNumericCode.itemNr}                     item={conditional.airlineNumericCode} />
                    <Item key={conditional.documentFormOrSerialNumber.itemNr}             item={conditional.documentFormOrSerialNumber} />
                    <Item key={conditional.selecteeIndicator.itemNr}                      item={conditional.selecteeIndicator} />
                    <Item key={conditional.internationalDocumentationVerification.itemNr} item={conditional.internationalDocumentationVerification} />
                    <Item key={conditional.marketingCarrierDesignator.itemNr}             item={conditional.marketingCarrierDesignator} />
                    <Item key={conditional.frequentFlyerAirlineDesignator.itemNr}         item={conditional.frequentFlyerAirlineDesignator} />
                    <Item key={conditional.frequentFlyerNumber.itemNr}                    item={conditional.frequentFlyerNumber} />
                    <Item key={conditional.idOrAdIndicator.itemNr}                        item={conditional.idOrAdIndicator} />
                    <Item key={conditional.freeBaggageAllowance.itemNr}                   item={conditional.freeBaggageAllowance} />
                    <Item key={conditional.fastTrack.itemNr}                              item={conditional.fastTrack} />

                    <Item key={conditional.forIndividualAirlineUse.itemNr}                item={conditional.forIndividualAirlineUse} />
                </Form>
            </Panel>
        )
    }
}

export default Flight;