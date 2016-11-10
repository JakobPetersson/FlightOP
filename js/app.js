import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import FlightOP from "./Bcbp/flight-op";

class App extends React.Component {
    render() {
        return (
            <div>
                <Header title="FlightOP"/>
                <FlightOP/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("app"));