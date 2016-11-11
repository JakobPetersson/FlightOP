import React from "react";
import HeaderConditional from "./header-conditional";
import GeneralConditional from "./general-conditional";

class GeneralItems extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <HeaderConditional conditionalItems={this.props.conditionalItems}
                                   dataChange={this.dataChange}/>
                <GeneralConditional conditionalItems={this.props.conditionalItems}
                                    dataChange={this.dataChange}/>
            </div>
        )
    }
}

export default GeneralItems;