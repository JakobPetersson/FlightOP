import React from "react";
import {Row} from "react-bootstrap";
import ItemGroup from "./ItemGroup";

class GeneralItems extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Row className="show-grid">
                <ItemGroup name="General Information" items={this.props.generalItems} />
            </Row>
        )
    }
}

export default GeneralItems;