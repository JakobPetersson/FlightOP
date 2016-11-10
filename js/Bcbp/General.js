import React from "react";
import GeneralMandatory from "./GeneralMandatory";
import HeaderConditional from "./HeaderConditional";
import GeneralConditional from "./GeneralConditional";

class GeneralItems extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <GeneralMandatory mandatoryItems={this.props.mandatoryItems}
                                  dataChange={this.dataChange}/>
                <HeaderConditional conditionalItems={this.props.conditionalItems}
                                   dataChange={this.dataChange}/>
                <GeneralConditional conditionalItems={this.props.conditionalItems}
                                    dataChange={this.dataChange}/>
            </div>
        )
    }
}

export default GeneralItems;