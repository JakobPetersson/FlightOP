import GeneralMandatoryItemsBuilder from "../General/GeneralMandatoryItemsBuilder";
import GeneralConditionalItemsBuilder from "../General/GeneralConditionalItemsBuilder";
import FlightMandatoryItemsBuilder from "./FlightMandatoryItemsBuilder";
import FlightConditionalItemsBuilder from "./FlightConditionalItemsBuilder";
import Flight from "./Flight";

class FlightBuilder {
    static build(provider, id) {
        const isFirstFlight = (id === 1);

        let conditionalItems = undefined;
        let generalMandatoryItems = undefined;
        let generalConditionalItems = undefined;

        if (isFirstFlight) {
            generalMandatoryItems = GeneralMandatoryItemsBuilder.build(provider);
        }

        const mandatoryItems = FlightMandatoryItemsBuilder.build(provider);

        if (mandatoryItems.hasConditionalItems()) {
            if (isFirstFlight) {
                generalConditionalItems = GeneralConditionalItemsBuilder.build(provider);
            }

            let flightConditionalSize = mandatoryItems.allConditionalSize().dec();
            if (isFirstFlight) {
                flightConditionalSize = flightConditionalSize - generalConditionalItems.totalSize();
            }
            conditionalItems = FlightConditionalItemsBuilder.build(provider, flightConditionalSize);
        }

        return new Flight(id, mandatoryItems, conditionalItems, generalMandatoryItems, generalConditionalItems);
    }
}

export default FlightBuilder;