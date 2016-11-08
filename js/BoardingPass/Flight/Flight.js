import GeneralMandatoryItems from "../General/MandatoryItems/GeneralMandatoryItems";
import GeneralConditionalItems from "../General/ConditionaItems/GeneralConditionalItems";
import FlightMandatoryItems from "./MandatoryItems/FlightMandatoryItems";
import FlightConditionalItems from "./ConditionalItems/FlightConditionalItems";

class Flight {
    constructor(provider, id) {
        this._id = id;
        this._isFirstFlight = (this._id == 1);

        this._mandatoryItems = undefined;
        this._conditionalItems = undefined;

        this._generalMandatoryItems = undefined;
        this._generalConditionalItems = undefined;


        if (this._isFirstFlight) {
            this._generalMandatoryItems = new GeneralMandatoryItems(provider);
        }

        this._mandatoryItems = new FlightMandatoryItems(provider);

        if (!this._mandatoryItems.hasConditionalItems()) {
            return;
        }


        if (this._isFirstFlight) {
            this._generalConditionalItems = new GeneralConditionalItems(provider);
        }

        let flightConditionalSize = this._mandatoryItems.allConditionalSize.dec();
        if (this._isFirstFlight) {
            flightConditionalSize = flightConditionalSize - this._generalConditionalItems.totalSize();
        }
        this._conditionalItems = new FlightConditionalItems(provider, flightConditionalSize);

        this.id = this.id.bind(this);
        this.generalMandatoryItems = this.generalMandatoryItems.bind(this);
        this.generalConditionalItems = this.generalConditionalItems.bind(this);
        this.mandatoryItems = this.mandatoryItems.bind(this);
        this.conditionalItems = this.conditionalItems.bind(this);
        this.build = this.build.bind(this);
    }

    id() {
        return this._id;
    }

    generalMandatoryItems() {
        return this._generalMandatoryItems;
    }

    generalConditionalItems() {
        return this._generalConditionalItems;
    }

    mandatoryItems() {
        return this._mandatoryItems;
    }

    conditionalItems() {
        return this._conditionalItems;
    }

    build() {
        let optional = this._conditionalItems.build();
        if (this._isFirstFlight) {
            optional = this._generalConditionalItems.build() + optional;
        }

        this._mandatoryItems.allConditionalSize.setDec(optional.length);

        let result = this._mandatoryItems.build() + optional;
        if (this._isFirstFlight) {
            result = this._generalMandatoryItems.build() + result;
        }

        return result;
    }
}

export default Flight;