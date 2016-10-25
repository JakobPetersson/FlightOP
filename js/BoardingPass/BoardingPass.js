import DataProvider from "./DataProvider";
import Flight from "./Flight";
import SecuritySector from "./SecuritySector";

class BoardingPass {
    constructor(rawData) {
        this.rawData = rawData;
        this.flights = [];

        let provider = new DataProvider(rawData);

        this.flights.push(new Flight(provider, this.flights.length + 1));

        this.mandatoryItems = this.flights[0].generalMandatoryItems;
        this.conditionalItems = this.flights[0].generalConditionalItems;

        this.securitySector = new SecuritySector(provider);
    }
}

export default BoardingPass;