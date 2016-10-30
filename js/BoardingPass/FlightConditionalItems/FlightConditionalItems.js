import ConditionalItem from "../ConditionalItem";
import DataProvider from "../DataProvider";

class FlightConditionalItems {
    constructor(provider, totalSize) {
        this.sizeHex = provider.getData(2);
        this.sizeDec = parseInt(this.sizeHex, 16);
        this.sizeOfConditional                      = new ConditionalItem(0, 'Size of conditional items',                  this.sizeHex, 2);

        if (provider.hasData(this.sizeDec)) {
            console.log(new Error("Not enough data for FlightConditionalItems"));
        }

        let conditionalData = new DataProvider(provider.getData(this.sizeDec));
        this.airlineNumericCode                     = new ConditionalItem(0, 'Airline Numeric Code',                       conditionalData.getData(3), 3);
        this.documentFormOrSerialNumber             = new ConditionalItem(0, 'Document Form/Serial Number',                conditionalData.getData(10), 10);
        this.selecteeIndicator                      = new ConditionalItem(0, 'Selectee indicator',                         conditionalData.getData(1), 1);
        this.internationalDocumentationVerification = new ConditionalItem(0, 'International Documentation Verification',   conditionalData.getData(1), 1);
        this.marketingCarrierDesignator             = new ConditionalItem(0, 'Marketing carrier designator',               conditionalData.getData(3), 3);
        this.frequentFlyerAirlineDesignator         = new ConditionalItem(0, 'Frequent Flyer Airline Designator',          conditionalData.getData(3), 3);
        this.frequentFlyerNumber                    = new ConditionalItem(0, 'Frequent Flyer Number',                      conditionalData.getData(16), 16);
        this.idOrAdIndicator                        = new ConditionalItem(0, 'ID/AD Indicator',                            conditionalData.getData(1), 1);
        this.freeBaggageAllowance                   = new ConditionalItem(0, 'Free Baggage Allowance',                     conditionalData.getData(3), 3);
        this.fastTrack                              = new ConditionalItem(0, 'Fast Track',                                 conditionalData.getData(1), 1);

        let individualSize = totalSize - 2 - this.sizeDec;
        if (individualSize < 0) {
            console.log(new Error("Something wrong with forIndividualAirlineUse size"));
        }
        this.forIndividualAirlineUse                = new ConditionalItem(0, 'For individual airline use',                 provider.getData(individualSize), individualSize)
    }
}

export default FlightConditionalItems;