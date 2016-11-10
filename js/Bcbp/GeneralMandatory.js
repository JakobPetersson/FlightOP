import React from "react";
import {Row, Panel, Form} from "react-bootstrap";
import Item from "./item/Item";

class GeneralItems extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const title = (
            <h3>General Information Mandatory</h3>
        );

        let mandatory = this.props.mandatoryItems;

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
                    </Form>
                </Panel>
            </Row>
        )
    }
}

export default GeneralItems;