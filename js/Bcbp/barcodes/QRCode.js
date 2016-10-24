import React from "react";
import QRCode from "qrcode.react";

class QROutput extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <QRCode value={this.props.rawData} size={200} />
            </div>
        )
    }
}

export default QROutput;