import DataProvider from "./DataProvider";
import Flight from "./Flight";
import SecurityItems from "./SecurityItems/SecurityItems";

class BoardingPass {
    constructor(rawData) {
        this.rawData = rawData;
        this.flights = [];

        let provider = new DataProvider(rawData);

        this.flights.push(new Flight(provider, this.flights.length + 1));

        this.mandatoryItems = this.flights[0].generalMandatoryItems;
        this.conditionalItems = this.flights[0].generalConditionalItems;

        this.securityItems = new SecurityItems(provider);
    }
}

export default BoardingPass;