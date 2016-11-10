import React from "react";
import {ListGroupItem, FormGroup, ControlLabel, Col, FormControl} from "react-bootstrap";
import ItemTextField from "./item-text-field";

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {item: this.props.item};
        this.dataChange = this.dataChange.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.item !== this.state.item) {
            this.setState({item: nextProps.item});
        }
    }

    dataChange(newData) {
        this.state.item.updateData(newData);
        this.props.dataChange();
    }

    render() {

        const validationState = this.state.item.errorDescription() ? 'error' : undefined;

        return (
            <ListGroupItem>
                <FormGroup validationState={validationState}>
                    <Col componentClass={ControlLabel} sm={4}>{this.state.item.name}</Col>
                    <Col sm={8}>
                        <ItemTextField value={this.state.item.data}
                                       maxLength={this.state.item.maxLength()}
                                       dataChange={this.dataChange}
                        />
                        <FormControl.Feedback />
                    </Col>
                </FormGroup>
            </ListGroupItem>
        )
    }
}

export default Item;