import React from "react";
import {Row, Panel, Form} from "react-bootstrap";
import Item from "./item/Item";
import OptionalItem from "./item/OptionalItem";

class GeneralItems extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const title = (
            <h3>General Information</h3>
        );

        let mandatory = this.props.mandatoryItems;
        let conditional = this.props.conditionalItems;

        return (
            <Row className="show-grid">
                <Panel header={title} bsStyle="primary">
                    <Form horizontal fill>
                        <Item item={mandatory.formatCode()}
                              dataChange={this.props.dataChange}/>
                        <Item item={mandatory.numberOfLegsEncoded()}
                              dataChange={this.props.dataChange}/>
                        <Item item={mandatory.passengerName()}
                              dataChange={this.props.dataChange}/>
                        <Item item={mandatory.electronicTicketIndicator()}
                              dataChange={this.props.dataChange}/>

                        <Item item={conditional.beginningOfVersionNumber()}
                              dataChange={this.props.dataChange}/>
                        <Item item={conditional.versionNumber()}
                              dataChange={this.props.dataChange}/>
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