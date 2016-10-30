import React from "react";
import {Grid, Row, Col} from "react-bootstrap";
import BoardingPass from "../BoardingPass/BoardingPass";
import RawInput from "./RawInput";
import Barcodes from "./barcodes/Barcodes";
import GeneralItems from "./GeneralItems";
import Flights from "./Flights";
import SecurityItems from "./SecurityItems";

class Bcbp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            boardingPass: new BoardingPass(this.loadInitialData())
        };
        this.setData = this.setData.bind(this);
        this.loadInitialData();
    }

    loadInitialData() {
        let queryData = Bcbp.getParameterByName("data");
        if (queryData) {
            return queryData;
        } else {
            return "M1PETERSSON/JAKOBKARLGEC23QD3 LASORDUA 1989 221Y037A0117 15D>3180 M6221BUA              2A01622382678750 UA                        N*30600    09         ^160MEUCIQCVe3nY2UCPZcLIDtDpftn23k+H1VKu2JMYiUps94CQgwIgSPF5t88W92J+IUCb4XruB4O757K4XeUo3Np7Qyy4dfM=";
        }
    }

    static getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    setData(newData) {
        this.setState({boardingPass: new BoardingPass(newData)});
    }

    render() {
        return (
            <Grid>
                <Row className="show-grid">
                    <h1>Boarding pass</h1>
                </Row>
                <Row>
                    <Col xs={12} md={6} >
                        <RawInput rawData={this.state.boardingPass.rawData} setData={this.setData} />
                    </Col>
                    <Col xs={12} md={6} >
                        <Barcodes rawData={this.state.boardingPass.rawData} />
                    </Col>
                </Row>
                <GeneralItems
                    mandatoryItems={this.state.boardingPass.mandatoryItems}
                    conditionalItems={this.state.boardingPass.conditionalItems} />
                <Flights flights={this.state.boardingPass.flights} />
                <SecurityItems securityItems={this.state.boardingPass.securityItems} />
            </Grid>
        )
    }
}

export default Bcbp;