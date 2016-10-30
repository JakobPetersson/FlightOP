import React from "react";
import {Row, Panel, Form} from "react-bootstrap";
import Item from "./Item";

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
                        <Item key={mandatory.formatCode.itemNr}                   item={mandatory.formatCode} />
                        <Item key={mandatory.numberOfLegsEncoded.itemNr}          item={mandatory.numberOfLegsEncoded} />
                        <Item key={mandatory.passengerName.itemNr}                item={mandatory.passengerName} />
                        <Item key={mandatory.electronicTicketIndicator.itemNr}    item={mandatory.electronicTicketIndicator} />

                        <Item key={conditional.beginningOfVersionNumber.itemNr}               item={conditional.beginningOfVersionNumber} />
                        <Item key={conditional.versionNumber.itemNr}                          item={conditional.versionNumber} />
                        <Item key={conditional.sizeOfConditional.itemNr}                      item={conditional.sizeOfConditional} />
                        <Item key={conditional.passengerDescription.itemNr}                   item={conditional.passengerDescription} />
                        <Item key={conditional.sourceOfCheckIn.itemNr}                        item={conditional.sourceOfCheckIn} />
                        <Item key={conditional.sourceOfBoardingPassIssuance.itemNr}           item={conditional.sourceOfBoardingPassIssuance} />
                        <Item key={conditional.dateOfIssueOfBoardingPass.itemNr}              item={conditional.dateOfIssueOfBoardingPass} />
                        <Item key={conditional.documentType.itemNr}                           item={conditional.documentType} />
                        <Item key={conditional.airlineDesignatorOfBoardingPassIssuer.itemNr}  item={conditional.airlineDesignatorOfBoardingPassIssuer} />
                        <Item key={conditional.baggageTag.itemNr}                             item={conditional.baggageTag} />
                        <Item key={conditional.firstNonConsecutiveBaggageTag.itemNr}          item={conditional.firstNonConsecutiveBaggageTag} />
                        <Item key={conditional.secondNonConsecutiveBaggageTag.itemNr}         item={conditional.secondNonConsecutiveBaggageTag} />
                    </Form>
                </Panel>
            </Row>
        )
    }
}

export default GeneralItems;