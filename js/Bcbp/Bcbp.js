import React from "react";
import General from "./General";
import Flights from "./Flights";
import SecurityItems from "./SecurityItems";

class Bcbp extends React.Component {
    constructor(props) {
        super(props);
     }

    render() {
        return (
            <div>
                <General mandatoryItems={this.props.boardingPass.mandatoryItems()}
                         conditionalItems={this.props.boardingPass.conditionalItems()}
                         dataChange={this.props.bcbpChange} />
                <Flights flights={this.props.boardingPass.flights()}
                         dataChange={this.props.bcbpChange}/>
                <SecurityItems securityItems={this.props.boardingPass.securityItems()}
                               bcbpChange={this.props.bcbpChange}/>
            </div>
        )
    }
}

export default Bcbp;