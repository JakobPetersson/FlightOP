import React from "react";
import {Row} from "react-bootstrap";
import ItemGroup from "./ItemGroup";

class SecurityItems extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Row className="show-grid">
                <ItemGroup name="Security Sector" items={this.props.securityItems.securityItems} />
            </Row>
        )
    }
}

export default SecurityItems;