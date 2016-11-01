import React from "react";
import {Row, Panel, Form} from "react-bootstrap";
import Item from "./Item";

class SecurityItems extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const title = (
            <h3>Security Sector</h3>
        );

        let items = this.props.securityItems;

        return (
            <Row className="show-grid">
                <Panel header={title} bsStyle="primary">
                    <Form horizontal fill>
                        <Item key={items.beginningOfSecurityData.itemNr}
                              item={items.beginningOfSecurityData}
                              dataChange={this.props.dataChange} />
                        <Item key={items.typeOfSecurityData.itemNr}
                              item={items.typeOfSecurityData}
                              dataChange={this.props.dataChange} />
                        <Item key={items.lengthOfSecurityData.itemNr}
                              item={items.lengthOfSecurityData}
                              dataChange={this.props.dataChange} />
                        <Item key={items.securityData.itemNr}
                              item={items.securityData}
                              dataChange={this.props.dataChange} />
                    </Form>
                </Panel>
            </Row>
        )
    }
}

export default SecurityItems;