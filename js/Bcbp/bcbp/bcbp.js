import React from "react";
import MandatoryGeneral from "./mandatory-general";
import General from "./general";
import Flights from "./flights";
import SecurityItems from "./security";

class Bcbp extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <MandatoryGeneral mandatoryGeneralItems={this.props.boardingPass.mandatoryItems()}
                                  dataChange={this.dataChange}/>
                <General conditionalItems={this.props.boardingPass.conditionalItems()}
                         dataChange={this.props.bcbpChange}/>
                <Flights flights={this.props.boardingPass.flights()}
                         dataChange={this.props.bcbpChange}/>
                <SecurityItems securityItems={this.props.boardingPass.securityItems()}
                               bcbpChange={this.props.bcbpChange}/>
            </div>
        )
    }
}

export default Bcbp;