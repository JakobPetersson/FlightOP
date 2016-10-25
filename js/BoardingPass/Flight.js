import GeneralMandatoryItems from "./GeneralMandatoryItems";
import GeneralConditionalItems from "./GeneralConditionalItems";
import FlightMandatoryItems from "./FlightMandatoryItems";
import FlightConditionalItems from "./FlightConditionalItems";

class Flight {
    constructor(provider, id) {
        this.id = id;
        this.isFirstFlight = (this.id == 1);

        if (this.isFirstFlight) {
            this.generalMandatoryItems = new GeneralMandatoryItems(provider);
        }

        this.mandatoryItems = new FlightMandatoryItems(provider);

        if (!this.mandatoryItems.hasConditionalItems()) {
            return;
        }

        if (this.isFirstFlight) {
            this.generalConditionalItems = new GeneralConditionalItems(provider);
        }

        let flightConditionalSize = this.mandatoryItems.sizeOfAllConditionals();
        if (this.isFirstFlight) {
            flightConditionalSize = flightConditionalSize - this.generalConditionalItems.totalSize();
        }
        this.conditionalItems = new FlightConditionalItems(provider, flightConditionalSize);
    }
}

export default Flight;