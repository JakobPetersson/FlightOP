import DataProvider from "./DataProvider";
import ConditionalItem from "./ConditionalItem";
import GeneralMandatoryItems from "./GeneralMandatoryItems";
import GeneralConditionalItems from "./GeneralConditionalItems";
import FlightMandatoryItems from "./FlightMandatoryItems";

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

        /*
         * Conditional fields for all flights on boarding pass
         */
        this.conditionalRepeatedSizeHex = provider.getData(2);
        this.sizeOfConditionalItems = new ConditionalItem('Size of conditional items', this.conditionalRepeatedSizeHex, 2);
        this.conditionalRepeatedSizeDec = parseInt(this.conditionalRepeatedSizeHex, 16);

        if (provider.hasData(this.conditionalRepeatedSizeDec)) {
            console.log(new Error("Not enough data for Flight repeated conditional items"));
        }

        this._initRepeatedConditionalFields(provider.getData(this.conditionalRepeatedSizeDec));

        let individualSize = this.mandatoryItems.sizeDec - 2 - this.conditionalRepeatedSizeDec - 2;
        if (this.isFirstFlight) {
            individualSize = individualSize - this.generalConditionalItems.sizeDec - 2;
        }
        this.forIndividualAirlineUse = new ConditionalItem('For individual airline use', provider.getData(individualSize), individualSize)
    }

    _initRepeatedConditionalFields(rawData) {
        let data = new DataProvider(rawData);
        this.airlineNumericCode = new ConditionalItem('Airline Numeric Code', data.getData(3), 3);
        this.documentFormOrSerialNumber = new ConditionalItem('Document Form/Serial Number', data.getData(10), 10);
        this.selecteeIndicator = new ConditionalItem('Selectee indicator', data.getData(1), 1);
        this.internationalDocumentationVerification = new ConditionalItem('International Documentation Verification', data.getData(1), 1);
        this.marketingCarrierDesignator = new ConditionalItem('Marketing carrier designator', data.getData(3), 3);
        this.frequentFlyerAirlineDesignator = new ConditionalItem('Frequent Flyer Airline Designator', data.getData(3), 3);
        this.frequentFlyerNumber = new ConditionalItem('Frequent Flyer Number', data.getData(16), 16);
        this.idOrAdIndicator = new ConditionalItem('ID/AD Indicator', data.getData(1), 1);
        this.freeBaggageAllowance = new ConditionalItem('Free Baggage Allowance', data.getData(3), 3);
        this.fastTrack = new ConditionalItem('Fast Track', data.getData(1), 1);
    }
}

export default Flight;