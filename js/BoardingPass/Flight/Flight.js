import GeneralMandatoryItems from "../General/MandatoryItems/GeneralMandatoryItems";
import GeneralConditionalItems from "../General/ConditionaItems/GeneralConditionalItems";
import FlightMandatoryItems from "./MandatoryItems/FlightMandatoryItems";
import FlightConditionalItems from "./ConditionalItems/FlightConditionalItems";

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

        let flightConditionalSize = this.mandatoryItems.allConditionalSize.dec();
        if (this.isFirstFlight) {
            flightConditionalSize = flightConditionalSize - this.generalConditionalItems.totalSize();
        }
        this.conditionalItems = new FlightConditionalItems(provider, flightConditionalSize);
    }
}

export default Flight;