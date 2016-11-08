import DataProvider from "../DataProvider";
import FlightBuilder from "./Flight/FlightBuilder";
import SecurityItemsBuilder from "./Security/SecurityItemsBuilder";
import BoardingPass from "./BoardingPass";

class BoardingPassBuilder {
    static build(rawData) {
        let flights = [];

        let provider = new DataProvider(rawData);

        flights.push(FlightBuilder.build(provider, flights.length + 1));

        const mandatoryItems = flights[0].generalMandatoryItems();
        const conditionalItems = flights[0].generalConditionalItems();
        const securityItems = SecurityItemsBuilder.build(provider);

        return new BoardingPass(rawData, mandatoryItems, conditionalItems, flights, securityItems);
    }
}

export default BoardingPassBuilder;