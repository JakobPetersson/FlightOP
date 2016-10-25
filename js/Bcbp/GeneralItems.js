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
                        <Item key={mandatory.formatCode.name}                   item={mandatory.formatCode} />
                        <Item key={mandatory.numberOfLegsEncoded.name}          item={mandatory.numberOfLegsEncoded} />
                        <Item key={mandatory.passengerName.name}                item={mandatory.passengerName} />
                        <Item key={mandatory.electronicTicketIndicator.name}    item={mandatory.electronicTicketIndicator} />

                        <Item key={conditional.beginningOfVersionNumber.name}               item={conditional.beginningOfVersionNumber} />
                        <Item key={conditional.versionNumber.name}                          item={conditional.versionNumber} />
                        <Item key={conditional.sizeOfConditional.name}                      item={conditional.sizeOfConditional} />
                        <Item key={conditional.passengerDescription.name}                   item={conditional.passengerDescription} />
                        <Item key={conditional.sourceOfCheckIn.name}                        item={conditional.sourceOfCheckIn} />
                        <Item key={conditional.sourceOfBoardingPassIssuance.name}           item={conditional.sourceOfBoardingPassIssuance} />
                        <Item key={conditional.dateOfIssueOfBoardingPass.name}              item={conditional.dateOfIssueOfBoardingPass} />
                        <Item key={conditional.documentType.name}                           item={conditional.documentType} />
                        <Item key={conditional.airlineDesignatorOfBoardingPassIssuer.name}  item={conditional.airlineDesignatorOfBoardingPassIssuer} />
                        <Item key={conditional.baggageTag.name}                             item={conditional.baggageTag} />
                        <Item key={conditional.firstNonConsecutiveBaggageTag.name}          item={conditional.firstNonConsecutiveBaggageTag} />
                        <Item key={conditional.secondNonConsecutiveBaggageTag.name}         item={conditional.secondNonConsecutiveBaggageTag} />
                    </Form>
                </Panel>
            </Row>
        )
    }
}

export default GeneralItems;