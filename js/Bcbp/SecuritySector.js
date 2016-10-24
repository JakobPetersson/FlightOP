import React from "react";
import {Row} from "react-bootstrap";
import ItemGroup from "./ItemGroup";

class SecuritySector extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Row className="show-grid">
                <ItemGroup name="Security Sector" items={this.props.securitySector.securityItems} />
            </Row>
        )
    }
}

export default SecuritySector;