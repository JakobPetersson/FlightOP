import DataProvider from "./DataProvider";
import Flight from "./Flight/Flight";
import SecurityItems from "./Security/SecurityItems";

class BoardingPass {
    constructor(rawData) {
        this.rawData = rawData;
        this.flights = [];

        let provider = new DataProvider(rawData);

        this.flights.push(new Flight(provider, this.flights.length + 1));

        this._mandatoryItems = this.flights[0].generalMandatoryItems;
        this._conditionalItems = this.flights[0].generalConditionalItems;
        this.securityItems = new SecurityItems(provider);

        this.mandatoryItems = this.mandatoryItems.bind(this);
        this.conditionalItems = this.conditionalItems.bind(this);

        this.build = this.build.bind(this);
    }

    mandatoryItems() {
        return this._mandatoryItems;
    }

    conditionalItems() {
        return this._conditionalItems;
    }

    build() {
        console.log("BoardingPass.build()");
        return new BoardingPass(
            this.flights[0].build() +
            this.securityItems.build()
        );
    }
}

export default BoardingPass;