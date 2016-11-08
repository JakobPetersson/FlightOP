import DataProvider from "./DataProvider";
import Flight from "./Flight/Flight";
import SecurityItems from "./Security/SecurityItems";

class BoardingPass {
    constructor(rawData) {
        this.rawData = rawData;
        this._flights = [];

        let provider = new DataProvider(rawData);

        this._flights.push(new Flight(provider, this._flights.length + 1));

        this._mandatoryItems = this._flights[0].generalMandatoryItems;
        this._conditionalItems = this._flights[0].generalConditionalItems;
        this._securityItems = new SecurityItems(provider);

        this.mandatoryItems = this.mandatoryItems.bind(this);
        this.conditionalItems = this.conditionalItems.bind(this);
        this.flights = this.flights.bind(this);
        this.securityItems = this.securityItems.bind(this);

        this.build = this.build.bind(this);
    }

    mandatoryItems() {
        return this._mandatoryItems;
    }

    conditionalItems() {
        return this._conditionalItems;
    }

    flights() {
        return this._flights;
    }

    securityItems() {
        return this._securityItems;
    }

    build() {
        console.log("BoardingPass.build()");
        return new BoardingPass(
            this._flights[0].build() +
            this._securityItems.build()
        );
    }
}

export default BoardingPass;