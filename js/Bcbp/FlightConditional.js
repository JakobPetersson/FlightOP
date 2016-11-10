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
            <h3>Flight {this.props.flight.id()} Conditional</h3>
        );

        let conditional = this.props.flight.conditionalItems();

        return (
            <Panel header={title} bsStyle="primary">
                <Form horizontal fill>
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