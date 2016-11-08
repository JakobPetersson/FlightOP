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
            <h3>Flight {this.props.flight.id()}</h3>
        );

        let mandatory = this.props.flight.mandatoryItems();
        let conditional = this.props.flight.conditionalItems();

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

                    <Item item={conditional.flightConditionalSize()}
                          dataChange={this.props.dataChange}/>

                    <OptionalItem item={conditional.airlineNumericCode()}
                                  dataChange={this.props.dataChange}/>
                    <OptionalItem item={conditional.documentFormOrSerialNumber()}
                                  dataChange={this.props.dataChange}/>
                    <OptionalItem item={conditional.selecteeIndicator()}
                                  dataChange={this.props.dataChange}/>
                    <OptionalItem item={conditional.internationalDocumentationVerification()}
                                  dataChange={this.props.dataChange}/>
                    <OptionalItem item={conditional.marketingCarrierDesignator()}
                                  dataChange={this.props.dataChange}/>
                    <OptionalItem item={conditional.frequentFlyerAirlineDesignator()}
                                  dataChange={this.props.dataChange}/>
                    <OptionalItem item={conditional.frequentFlyerNumber()}
                                  dataChange={this.props.dataChange}/>
                    <OptionalItem item={conditional.idOrAdIndicator()}
                                  dataChange={this.props.dataChange}/>
                    <OptionalItem item={conditional.freeBaggageAllowance()}
                                  dataChange={this.props.dataChange}/>
                    <OptionalItem item={conditional.fastTrack()}
                                  dataChange={this.props.dataChange}/>

                    <OptionalItem item={conditional.forIndividualAirlineUse()}
                                  dataChange={this.props.dataChange}/>
                </Form>
            </Panel>
        )
    }
}

export default Flight;