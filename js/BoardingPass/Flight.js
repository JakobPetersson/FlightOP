import GeneralMandatoryItems from "./GeneralConditionalItems/GeneralMandatoryItems";
import GeneralConditionalItems from "./GeneralMandatoryItems/GeneralConditionalItems";
import FlightMandatoryItems from "./FlightMandatoryItems/FlightMandatoryItems";
import FlightConditionalItems from "./FlightConditionalItems/FlightConditionalItems";

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