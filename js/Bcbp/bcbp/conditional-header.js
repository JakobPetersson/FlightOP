import React from "react";
import {Row, Panel, Form} from "react-bootstrap";
import Item from "./items/item";

class GeneralItems extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const title = (
            <h3>Conditional header</h3>
        );

        let conditional = this.props.conditionalGeneralItems;

        return (
            <Row className="show-grid">
                <Panel header={title} bsStyle="primary">
                    <Form horizontal fill>
                        <Item item={conditional.beginningOfVersionNumber()}
                              dataChange={this.props.bcbpChange}/>
                        <Item item={conditional.versionNumber()}
                              dataChange={this.props.bcbpChange}/>
                    </Form>
                </Panel>
            </Row>
        )
    }
}

export default GeneralItems;