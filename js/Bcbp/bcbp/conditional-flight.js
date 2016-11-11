import React from "react";
import {Row, Panel, Form} from "react-bootstrap";
import Item from "./items/item";
import OptionalItem from "./items/optional-item";

class ConditionalFlight extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const title = (
            <h3>Flight {this.props.flightId} Conditional Information</h3>
        );

        const items = this.props.conditionalFlightItems;

        return (
            <Row className="show-grid">
                <Panel header={title} bsStyle="primary">
                    <Form horizontal fill>
                        <Item item={items.flightConditionalSize()}
                              dataChange={this.props.bcbpChange}/>

                        <OptionalItem item={items.airlineNumericCode()}
                                      dataChange={this.props.bcbpChange}/>
                        <OptionalItem item={items.documentFormOrSerialNumber()}
                                      dataChange={this.props.bcbpChange}/>
                        <OptionalItem item={items.selecteeIndicator()}
                                      dataChange={this.props.bcbpChange}/>
                        <OptionalItem item={items.internationalDocumentationVerification()}
                                      dataChange={this.props.bcbpChange}/>
                        <OptionalItem item={items.marketingCarrierDesignator()}
                                      dataChange={this.props.bcbpChange}/>
                        <OptionalItem item={items.frequentFlyerAirlineDesignator()}
                                      dataChange={this.props.bcbpChange}/>
                        <OptionalItem item={items.frequentFlyerNumber()}
                                      dataChange={this.props.bcbpChange}/>
                        <OptionalItem item={items.idOrAdIndicator()}
                                      dataChange={this.props.bcbpChange}/>
                        <OptionalItem item={items.freeBaggageAllowance()}
                                      dataChange={this.props.bcbpChange}/>
                        <OptionalItem item={items.fastTrack()}
                                      dataChange={this.props.bcbpChange}/>

                        <OptionalItem item={items.forIndividualAirlineUse()}
                                      dataChange={this.props.bcbpChange}/>
                    </Form>
                </Panel>
            </Row>
        )
    }
}

export default ConditionalFlight;