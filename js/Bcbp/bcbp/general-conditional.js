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
            <h3>General Information Conditional</h3>
        );

        let conditional = this.props.conditionalItems;

        return (
            <Row className="show-grid">
                <Panel header={title} bsStyle="primary">
                    <Form horizontal fill>
                        <Item item={conditional.generalConditionalSize()}
                              dataChange={this.props.dataChange}/>
                        <OptionalItem item={conditional.passengerDescription()}
                                      dataChange={this.props.dataChange}/>
                        <OptionalItem item={conditional.sourceOfCheckIn()}
                                      dataChange={this.props.dataChange}/>
                        <OptionalItem item={conditional.sourceOfBoardingPassIssuance()}
                                      dataChange={this.props.dataChange}/>
                        <OptionalItem item={conditional.dateOfIssueOfBoardingPass()}
                                      dataChange={this.props.dataChange}/>
                        <OptionalItem item={conditional.documentType()}
                                      dataChange={this.props.dataChange}/>
                        <OptionalItem item={conditional.airlineDesignatorOfBoardingPassIssuer()}
                                      dataChange={this.props.dataChange}/>
                        <OptionalItem item={conditional.baggageTag()}
                                      dataChange={this.props.dataChange}/>
                        <OptionalItem item={conditional.firstNonConsecutiveBaggageTag()}
                                      dataChange={this.props.dataChange}/>
                        <OptionalItem item={conditional.secondNonConsecutiveBaggageTag()}
                                      dataChange={this.props.dataChange}/>
                    </Form>
                </Panel>
            </Row>
        )
    }
}

export default GeneralItems;