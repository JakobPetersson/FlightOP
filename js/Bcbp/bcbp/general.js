import React from "react";
import GeneralMandatory from "./general-mandatory";
import HeaderConditional from "./header-conditional";
import GeneralConditional from "./general-conditional";

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