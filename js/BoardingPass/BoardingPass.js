import DataProvider from "./DataProvider";
import Flight from "./Flight/Flight";
import SecurityItems from "./Security/SecurityItems";

class BoardingPass {
    constructor(rawData) {
        this.rawData = rawData;
        this.flights = [];

        let provider = new DataProvider(rawData);

        this.flights.push(new Flight(provider, this.flights.length + 1));

        this.mandatoryItems = this.flights[0].generalMandatoryItems;
        this.conditionalItems = this.flights[0].generalConditionalItems;
        this.securityItems = new SecurityItems(provider);

        this.build = this.build.bind(this);
    }

    build() {
        console.log("BoardingPass.build()");
        return new BoardingPass(
            this.flights[0].build()
        );
    }
}

export default BoardingPass;