import React from "react";
import {Row, Panel, Form} from "react-bootstrap";
import Item from "./items/item";

class MandatoryGeneral extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const title = (
            <h3>General Information Mandatory</h3>
        );

        let mandatory = this.props.mandatoryGeneralItems;

        return (
            <Row className="show-grid">
                <Panel header={title} bsStyle="primary">
                    <Form horizontal fill>
                        <Item item={mandatory.formatCode()}
                              dataChange={this.props.bcbpChange}/>
                        <Item item={mandatory.numberOfLegsEncoded()}
                              dataChange={this.props.bcbpChange}/>
                        <Item item={mandatory.passengerName()}
                              dataChange={this.props.bcbpChange}/>
                        <Item item={mandatory.electronicTicketIndicator()}
                              dataChange={this.props.bcbpChange}/>
                    </Form>
                </Panel>
            </Row>
        )
    }
}

export default MandatoryGeneral;