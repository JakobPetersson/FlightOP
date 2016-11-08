import React from "react";
import {Row, Panel, Form, Checkbox} from "react-bootstrap";
import Item from "./item/Item";

class SecurityItems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {securityItems: this.props.securityItems};
        this.enableCheckboxChanged = this.enableCheckboxChanged.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.securityItems !== this.state.securityItems) {
            this.setState({securityItems: nextProps.securityItems});
        }
    }

    enableCheckboxChanged(ev) {
        this.state.securityItems.setEnabled(ev.target.checked);
        this.props.bcbpChange();
    }

    render() {
        const title = (
            <Checkbox
                checked={this.state.securityItems.isEnabled()}
                onChange={this.enableCheckboxChanged}>
                Security Sector
            </Checkbox>
        );

        const items = this.state.securityItems;

        return (
            <Row className="show-grid">
                <Panel header={title} bsStyle="primary">
                    <Form horizontal fill hidden={!this.state.securityItems.isEnabled()}>
                        <Item item={items.beginningOfSecurityData()}
                              dataChange={this.props.bcbpChange}/>
                        <Item item={items.typeOfSecurityData()}
                              dataChange={this.props.bcbpChange}/>
                        <Item item={items.lengthOfSecurityData()}
                              dataChange={this.props.bcbpChange}/>
                        <Item item={items.securityData()}
                              dataChange={this.props.bcbpChange}/>
                    </Form>
                </Panel>
            </Row>
        )
    }
}

export default SecurityItems;