import React from "react";
import {Row, Panel, Form} from "react-bootstrap";
import Item from "./items/item";

class MandatoryGeneral extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const title = (
            <h3>General Mandatory Information</h3>
        );

        const items = this.props.mandatoryGeneralItems;

        return (
            <Row className="show-grid">
                <Panel header={title} bsStyle="primary">
                    <Form horizontal fill>
                        <Item item={items.formatCode()}
                              dataChange={this.props.bcbpChange}/>
                        <Item item={items.numberOfLegsEncoded()}
                              dataChange={this.props.bcbpChange}/>
                        <Item item={items.passengerName()}
                              dataChange={this.props.bcbpChange}/>
                        <Item item={items.electronicTicketIndicator()}
                              dataChange={this.props.bcbpChange}/>
                    </Form>
                </Panel>
            </Row>
        )
    }
}

export default MandatoryGeneral;