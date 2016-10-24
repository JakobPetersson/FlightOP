import React from "react";
import {ListGroupItem, FormGroup, ControlLabel, Col, FormControl} from "react-bootstrap";

class Item extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ListGroupItem>
                <FormGroup>
                    <Col componentClass={ControlLabel} sm={4}>
                        {this.props.item.name}
                    </Col>
                    <Col sm={8}>
                        <FormControl type="text" value={this.props.item.data}/>
                    </Col>
                </FormGroup>
            </ListGroupItem>
        )
    }
}

export default Item;