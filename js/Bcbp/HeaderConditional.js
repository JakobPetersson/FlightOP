import React from "react";
import {Row, Panel, Form} from "react-bootstrap";
import Item from "./item/Item";

class GeneralItems extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const title = (
            <h3>Conditionals header</h3>
        );

        let conditional = this.props.conditionalItems;

        return (
            <Row className="show-grid">
                <Panel header={title} bsStyle="primary">
                    <Form horizontal fill>
                        <Item item={conditional.beginningOfVersionNumber()}
                              dataChange={this.props.dataChange}/>
                        <Item item={conditional.versionNumber()}
                              dataChange={this.props.dataChange}/>
                    </Form>
                </Panel>
            </Row>
        )
    }
}

export default GeneralItems;