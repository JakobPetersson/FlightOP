import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Bcbp from "./Bcbp/Bcbp";

class App extends React.Component {
    render() {
        return (
            <div>
                <Header title="FlightOP"/>
                <Bcbp name="Test" />
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("app"));