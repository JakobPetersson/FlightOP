import React from "react";
import {Panel, Form} from "react-bootstrap";
import Item from "./item/Item";
import OptionalItem from "./item/OptionalItem";

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
                    <Item key={mandatory.operatingCarrierPNRCode.itemNr}
                          item={mandatory.operatingCarrierPNRCode}
                          dataChange={this.props.dataChange}/>
                    <Item key={mandatory.fromCityAirportCode.itemNr}
                          item={mandatory.fromCityAirportCode}
                          dataChange={this.props.dataChange}/>
                    <Item key={mandatory.toCityAirportCode.itemNr}
                          item={mandatory.toCityAirportCode}
                          dataChange={this.props.dataChange}/>
                    <Item key={mandatory.operatingCarrierDesignator.itemNr}
                          item={mandatory.operatingCarrierDesignator}
                          dataChange={this.props.dataChange}/>
                    <Item key={mandatory.flightNumber.itemNr}
                          item={mandatory.flightNumber}
                          dataChange={this.props.dataChange}/>
                    <Item key={mandatory.dateOfFlight.itemNr}
                          item={mandatory.dateOfFlight}
                          dataChange={this.props.dataChange}/>
                    <Item key={mandatory.compartmentCode.itemNr}
                          item={mandatory.compartmentCode}
                          dataChange={this.props.dataChange}/>
                    <Item key={mandatory.seatNumber.itemNr}
                          item={mandatory.seatNumber}
                          dataChange={this.props.dataChange}/>
                    <Item key={mandatory.checkInSequenceNumber.itemNr}
                          item={mandatory.checkInSequenceNumber}
                          dataChange={this.props.dataChange}/>
                    <Item key={mandatory.passengerStatus.itemNr}
                          item={mandatory.passengerStatus}
                          dataChange={this.props.dataChange}/>

                    <Item key={mandatory.allConditionalSize.itemNr}
                          item={mandatory.allConditionalSize}
                          dataChange={this.props.dataChange}/>

                    <Item key={conditional.flightConditionalSize.itemNr}
                          item={conditional.flightConditionalSize}
                          dataChange={this.props.dataChange}/>

                    <OptionalItem key={conditional.airlineNumericCode.itemNr}
                                  item={conditional.airlineNumericCode}
                                  dataChange={this.props.dataChange}/>
                    <OptionalItem key={conditional.documentFormOrSerialNumber.itemNr}
                                  item={conditional.documentFormOrSerialNumber}
                                  dataChange={this.props.dataChange}/>
                    <OptionalItem key={conditional.selecteeIndicator.itemNr}
                                  item={conditional.selecteeIndicator}
                                  dataChange={this.props.dataChange}/>
                    <OptionalItem key={conditional.internationalDocumentationVerification.itemNr}
                                  item={conditional.internationalDocumentationVerification}
                                  dataChange={this.props.dataChange}/>
                    <OptionalItem key={conditional.marketingCarrierDesignator.itemNr}
                                  item={conditional.marketingCarrierDesignator}
                                  dataChange={this.props.dataChange}/>
                    <OptionalItem key={conditional.frequentFlyerAirlineDesignator.itemNr}
                                  item={conditional.frequentFlyerAirlineDesignator}
                                  dataChange={this.props.dataChange}/>
                    <OptionalItem key={conditional.frequentFlyerNumber.itemNr}
                                  item={conditional.frequentFlyerNumber}
                                  dataChange={this.props.dataChange}/>
                    <OptionalItem key={conditional.idOrAdIndicator.itemNr}
                                  item={conditional.idOrAdIndicator}
                                  dataChange={this.props.dataChange}/>
                    <OptionalItem key={conditional.freeBaggageAllowance.itemNr}
                                  item={conditional.freeBaggageAllowance}
                                  dataChange={this.props.dataChange}/>
                    <OptionalItem key={conditional.fastTrack.itemNr}
                                  item={conditional.fastTrack}
                                  dataChange={this.props.dataChange}/>

                    <OptionalItem key={conditional.forIndividualAirlineUse.itemNr}
                                  item={conditional.forIndividualAirlineUse}
                                  dataChange={this.props.dataChange}/>
                </Form>
            </Panel>
        )
    }
}

export default Flight;