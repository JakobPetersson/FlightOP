import React from "react";
import {Row, Panel, Form} from "react-bootstrap";
import Item from "./items/item";

class ConditionalHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const title = (
            <h3>Conditional Header Information</h3>
        );

        const items = this.props.conditionalGeneralItems;

        return (
            <Row className="show-grid">
                <Panel header={title} bsStyle="primary">
                    <Form horizontal fill>
                        <Item item={items.beginningOfVersionNumber()}
                              dataChange={this.props.bcbpChange}/>
                        <Item item={items.versionNumber()}
                              dataChange={this.props.bcbpChange}/>
                    </Form>
                </Panel>
            </Row>
        )
    }
}

export default ConditionalHeader;