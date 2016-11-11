import React from "react";
import MandatoryGeneral from "./mandatory-general";
import ConditionalHeader from "./conditional-header";
import ConditionalGeneral from "./conditional-general";
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
                                  bcbpChange={this.bcbpChange}/>
                <ConditionalHeader conditionalGeneralItems={this.props.boardingPass.conditionalItems()}
                                   bcbpChange={this.bcbpChange}/>
                <ConditionalGeneral conditionalGeneralItems={this.props.boardingPass.conditionalItems()}
                                    bcbpChange={this.bcbpChange}/>
                <Flights flights={this.props.boardingPass.flights()}
                         dataChange={this.props.bcbpChange}/>
                <SecurityItems securityItems={this.props.boardingPass.securityItems()}
                               bcbpChange={this.props.bcbpChange}/>
            </div>
        )
    }
}

export default Bcbp;