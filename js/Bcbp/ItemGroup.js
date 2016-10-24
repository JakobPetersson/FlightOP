import React from "react";
import {Panel, Form} from "react-bootstrap";
import Item from "./Item";

class ItemGroup extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const title = (
            <h3>{this.props.name}</h3>
        );

        return (
            <Panel header={title} bsStyle="primary">
                <Form horizontal fill>
                    {this.props.items.map((item) => (
                        <Item key={item.name} item={item} />
                    ))}
                </Form>
            </Panel>
        )
    }
}

export default ItemGroup;