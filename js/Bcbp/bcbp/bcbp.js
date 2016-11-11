import React from "react";
import MandatoryGeneral from "./mandatory-general";
import ConditionalHeader from "./conditional-header";
import ConditionalGeneral from "./conditional-general";
import Flight from "./flight";
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
                {this.props.boardingPass.flights().map((flight) => (
                    <Flight key={flight.id}
                            flight={flight}
                            dataChange={this.props.bcbpChange}/>
                ))}
                <SecurityItems securityItems={this.props.boardingPass.securityItems()}
                               bcbpChange={this.props.bcbpChange}/>
            </div>
        )
    }
}

export default Bcbp;