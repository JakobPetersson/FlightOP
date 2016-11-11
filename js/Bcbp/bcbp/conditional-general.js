import React from "react";
import {Row, Panel, Form} from "react-bootstrap";
import Item from "./items/item";
import OptionalItem from "./items/optional-item";

class ConditionalGeneral extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const title = (
            <h3>Conditional General Information</h3>
        );

        const items = this.props.conditionalGeneralItems;

        return (
            <Row className="show-grid">
                <Panel header={title} bsStyle="primary">
                    <Form horizontal fill>
                        <Item item={items.generalConditionalSize()}
                              dataChange={this.props.bcbpChange}/>
                        <OptionalItem item={items.passengerDescription()}
                                      dataChange={this.props.bcbpChange}/>
                        <OptionalItem item={items.sourceOfCheckIn()}
                                      dataChange={this.props.bcbpChange}/>
                        <OptionalItem item={items.sourceOfBoardingPassIssuance()}
                                      dataChange={this.props.bcbpChange}/>
                        <OptionalItem item={items.dateOfIssueOfBoardingPass()}
                                      dataChange={this.props.bcbpChange}/>
                        <OptionalItem item={items.documentType()}
                                      dataChange={this.props.bcbpChange}/>
                        <OptionalItem item={items.airlineDesignatorOfBoardingPassIssuer()}
                                      dataChange={this.props.bcbpChange}/>
                        <OptionalItem item={items.baggageTag()}
                                      dataChange={this.props.bcbpChange}/>
                        <OptionalItem item={items.firstNonConsecutiveBaggageTag()}
                                      dataChange={this.props.bcbpChange}/>
                        <OptionalItem item={items.secondNonConsecutiveBaggageTag()}
                                      dataChange={this.props.bcbpChange}/>
                    </Form>
                </Panel>
            </Row>
        )
    }
}

export default ConditionalGeneral;