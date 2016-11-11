import React from "react";
import MandatoryGeneral from "./mandatory-general";
import ConditionalHeader from "./conditional-header";
import ConditionalGeneral from "./conditional-general";
import MandatoryFlight from "./mandatory-flight";
import ConditionalFlight from "./conditional-flight";
import Security from "./security";

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
                    <div key={flight.id()}>
                        <MandatoryFlight flightId={flight.id()}
                                         mandatoryFlightItems={flight.mandatoryItems()}
                                         bcbpChange={this.props.bcbpChange}/>
                        <ConditionalFlight flightId={flight.id()}
                                           conditionalFlightItems={flight.conditionalItems()}
                                           bcbpChange={this.props.bcbpChange}/>
                    </div>
                ))}
                <Security securityItems={this.props.boardingPass.securityItems()}
                          bcbpChange={this.props.bcbpChange}/>
            </div>
        )
    }
}

export default Bcbp;