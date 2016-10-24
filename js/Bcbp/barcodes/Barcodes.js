import React from "react";
import {Panel, ButtonGroup, Button, Row, Col} from "react-bootstrap";
import QRCode from "./QRCode";
import Aztec from "./Aztec";
import Datamatrix from "./Datamatrix";
import PDF417 from "./PDF417";


class Barcodes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedBarcode: "QRCode"
        };
        this.viewQRCode = this.viewQRCode.bind(this);
        this.viewAztec = this.viewAztec.bind(this);
        this.viewDatamatrix = this.viewDatamatrix.bind(this);
        this.viewPDF417 = this.viewPDF417.bind(this);
    }

    viewQRCode() {
        this.setState({selectedBarcode: 'QRCode'});
    }

    viewAztec() {
        this.setState({selectedBarcode: 'Aztec'});
    }

    viewDatamatrix() {
        this.setState({selectedBarcode: 'Datamatrix'});
    }

    viewPDF417() {
        this.setState({selectedBarcode: 'PDF417'});
    }

    render() {
        const title = (
            <h3>Barcodes</h3>
        );

        return (
            <Panel header={title} bsStyle="primary">
                <Col xs={1} md={1} />
                <Col xs={10} md={10}>
                    <Row className="show-grid">
                        {this.state.selectedBarcode == 'QRCode' ? <QRCode rawData={this.props.rawData} /> : null}
                        {this.state.selectedBarcode == 'Aztec' ? <Aztec rawData={this.props.rawData} /> : null}
                        {this.state.selectedBarcode == 'Datamatrix' ? <Datamatrix rawData={this.props.rawData} /> : null}
                        {this.state.selectedBarcode == 'PDF417' ? <PDF417 rawData={this.props.rawData} /> : null}
                    </Row>
                    <Row className="show-grid">
                        <ButtonGroup>
                            <Button onClick={this.viewQRCode}>QR code</Button>
                            <Button onClick={this.viewAztec}>Aztec</Button>
                            <Button onClick={this.viewDatamatrix}>Datamatrix</Button>
                            <Button onClick={this.viewPDF417}>PDF417</Button>
                        </ButtonGroup>
                    </Row>
                </Col>
                <Col xs={1} md={1} />
            </Panel>
        )
    }
}

export default Barcodes;