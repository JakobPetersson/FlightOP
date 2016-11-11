import React from "react";
import {Row, Panel, Form} from "react-bootstrap";
import Item from "./items/item";
import OptionalItem from "./items/optional-item";

class GeneralItems extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const title = (
            <h3>Conditional General Information</h3>
        );

        let conditional = this.props.conditionalGeneralItems;

        return (
            <Row className="show-grid">
                <Panel header={title} bsStyle="primary">
                    <Form horizontal fill>
                        <Item item={conditional.generalConditionalSize()}
                              dataChange={this.props.bcbpChange}/>
                        <OptionalItem item={conditional.passengerDescription()}
                                      dataChange={this.props.bcbpChange}/>
                        <OptionalItem item={conditional.sourceOfCheckIn()}
                                      dataChange={this.props.bcbpChange}/>
                        <OptionalItem item={conditional.sourceOfBoardingPassIssuance()}
                                      dataChange={this.props.bcbpChange}/>
                        <OptionalItem item={conditional.dateOfIssueOfBoardingPass()}
                                      dataChange={this.props.bcbpChange}/>
                        <OptionalItem item={conditional.documentType()}
                                      dataChange={this.props.bcbpChange}/>
                        <OptionalItem item={conditional.airlineDesignatorOfBoardingPassIssuer()}
                                      dataChange={this.props.bcbpChange}/>
                        <OptionalItem item={conditional.baggageTag()}
                                      dataChange={this.props.bcbpChange}/>
                        <OptionalItem item={conditional.firstNonConsecutiveBaggageTag()}
                                      dataChange={this.props.bcbpChange}/>
                        <OptionalItem item={conditional.secondNonConsecutiveBaggageTag()}
                                      dataChange={this.props.bcbpChange}/>
                    </Form>
                </Panel>
            </Row>
        )
    }
}

export default GeneralItems;