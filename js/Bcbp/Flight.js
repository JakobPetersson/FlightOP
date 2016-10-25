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

                    <Item key={mandatory.sizeOfAllConditional.name}         item={mandatory.sizeOfAllConditional} />

                    <Item key={conditional.sizeOfConditional.name}                      item={conditional.sizeOfConditional} />

                    <Item key={conditional.airlineNumericCode.name}                     item={conditional.airlineNumericCode} />
                    <Item key={conditional.documentFormOrSerialNumber.name}             item={conditional.documentFormOrSerialNumber} />
                    <Item key={conditional.selecteeIndicator.name}                      item={conditional.selecteeIndicator} />
                    <Item key={conditional.internationalDocumentationVerification.name} item={conditional.internationalDocumentationVerification} />
                    <Item key={conditional.marketingCarrierDesignator.name}             item={conditional.marketingCarrierDesignator} />
                    <Item key={conditional.frequentFlyerAirlineDesignator.name}         item={conditional.frequentFlyerAirlineDesignator} />
                    <Item key={conditional.frequentFlyerNumber.name}                    item={conditional.frequentFlyerNumber} />
                    <Item key={conditional.idOrAdIndicator.name}                        item={conditional.idOrAdIndicator} />
                    <Item key={conditional.freeBaggageAllowance.name}                   item={conditional.freeBaggageAllowance} />
                    <Item key={conditional.fastTrack.name}                              item={conditional.fastTrack} />

                    <Item key={conditional.forIndividualAirlineUse.name}                item={conditional.forIndividualAirlineUse} />
                </Form>
            </Panel>
        )
    }
}

export default Flight;