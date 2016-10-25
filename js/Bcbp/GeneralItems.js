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

        return (
            <Row className="show-grid">
                <Panel header={title} bsStyle="primary">
                    <Form horizontal fill>
                        <Item key={mandatory.formatCode.name}                   item={mandatory.formatCode} />
                        <Item key={mandatory.numberOfLegsEncoded.name}          item={mandatory.numberOfLegsEncoded} />
                        <Item key={mandatory.passengerName.name}                item={mandatory.passengerName} />
                        <Item key={mandatory.electronicTicketIndicator.name}    item={mandatory.electronicTicketIndicator} />

                        {this.props.conditionalItems.map((item) => (
                            <Item key={item.name} item={item} />
                        ))}
                    </Form>
                </Panel>
            </Row>
        )
    }
}

export default GeneralItems;