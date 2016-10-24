import DataConsumer from "./DataConsumer";
import Flight from "./Flight";
import SecuritySector from "./SecuritySector";

class BoardingPass {
    constructor(rawData) {
        this.rawData = rawData;
        this.generalItems = [];
        this.flights = [];

        let consumer = new DataConsumer(rawData);

        this.flights.push(new Flight(consumer, this.flights.length + 1));

        // General mandatory items
        this.generalItems = this.flights[0].generalItems;

        this.securitySector = new SecuritySector(consumer);
    }
}

export default BoardingPass;