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

        const conditionalHeader = (
            <ConditionalHeader conditionalGeneralItems={this.props.boardingPass.conditionalItems()}
                               bcbpChange={this.bcbpChange}/>
        );

        const conditionalGeneral = (
            <ConditionalGeneral conditionalGeneralItems={this.props.boardingPass.conditionalItems()}
                                bcbpChange={this.bcbpChange}/>
        );

        return (
            <div>
                <MandatoryGeneral mandatoryGeneralItems={this.props.boardingPass.mandatoryItems()}
                                  bcbpChange={this.bcbpChange}/>
                {this.props.boardingPass.flights().map((flight) => (
                    <div key={flight.id()}>
                        <MandatoryFlight flightId={flight.id()}
                                         mandatoryFlightItems={flight.mandatoryItems()}
                                         bcbpChange={this.props.bcbpChange}/>
                        {flight.id() == 1? conditionalHeader : undefined}
                        <ConditionalFlight flightId={flight.id()}
                                           conditionalFlightItems={flight.conditionalItems()}
                                           bcbpChange={this.props.bcbpChange}/>
                        {flight.id() == 1? conditionalGeneral : undefined}
                    </div>
                ))}
                <Security securityItems={this.props.boardingPass.securityItems()}
                          bcbpChange={this.props.bcbpChange}/>
            </div>
        )
    }
}

export default Bcbp;