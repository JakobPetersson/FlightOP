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
                        <Item key={mandatory.formatCode.itemNr}
                              item={mandatory.formatCode}
                              dataChange={this.props.dataChange}/>
                        <Item key={mandatory.numberOfLegsEncoded.itemNr}
                              item={mandatory.numberOfLegsEncoded}
                              dataChange={this.props.dataChange}/>
                        <Item key={mandatory.passengerName.itemNr}
                              item={mandatory.passengerName}
                              dataChange={this.props.dataChange}/>
                        <Item key={mandatory.electronicTicketIndicator.itemNr}
                              item={mandatory.electronicTicketIndicator}
                              dataChange={this.props.dataChange}/>

                        <Item key={conditional.beginningOfVersionNumber.itemNr}
                              item={conditional.beginningOfVersionNumber}
                              dataChange={this.props.dataChange}/>
                        <Item key={conditional.versionNumber.itemNr}
                              item={conditional.versionNumber}
                              dataChange={this.props.dataChange}/>
                        <Item key={conditional.generalConditionalSize.itemNr}
                              item={conditional.generalConditionalSize}
                              dataChange={this.props.dataChange}/>

                        <OptionalItem key={conditional.passengerDescription.itemNr}
                                      item={conditional.passengerDescription}
                                      dataChange={this.props.dataChange}/>
                        <OptionalItem key={conditional.sourceOfCheckIn.itemNr}
                                      item={conditional.sourceOfCheckIn}
                                      dataChange={this.props.dataChange}/>
                        <OptionalItem key={conditional.sourceOfBoardingPassIssuance.itemNr}
                                      item={conditional.sourceOfBoardingPassIssuance}
                                      dataChange={this.props.dataChange}/>
                        <OptionalItem key={conditional.dateOfIssueOfBoardingPass.itemNr}
                                      item={conditional.dateOfIssueOfBoardingPass}
                                      dataChange={this.props.dataChange}/>
                        <OptionalItem key={conditional.documentType.itemNr}
                                      item={conditional.documentType}
                                      dataChange={this.props.dataChange}/>
                        <OptionalItem key={conditional.airlineDesignatorOfBoardingPassIssuer.itemNr}
                                      item={conditional.airlineDesignatorOfBoardingPassIssuer}
                                      dataChange={this.props.dataChange}/>
                        <OptionalItem key={conditional.baggageTag.itemNr}
                                      item={conditional.baggageTag}
                                      dataChange={this.props.dataChange}/>
                        <OptionalItem key={conditional.firstNonConsecutiveBaggageTag.itemNr}
                                      item={conditional.firstNonConsecutiveBaggageTag}
                                      dataChange={this.props.dataChange}/>
                        <OptionalItem key={conditional.secondNonConsecutiveBaggageTag.itemNr}
                                      item={conditional.secondNonConsecutiveBaggageTag}
                                      dataChange={this.props.dataChange}/>
                    </Form>
                </Panel>
            </Row>
        )
    }
}

export default GeneralItems;