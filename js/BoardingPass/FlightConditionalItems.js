import ConditionalItem from "./ConditionalItem";
import DataProvider from "./DataProvider";

class FlightConditionalItems {
    constructor(provider, totalSize) {
        this.sizeHex = provider.getData(2);
        this.sizeDec = parseInt(this.sizeHex, 16);
        this.sizeOfConditional                      = new ConditionalItem('Size of conditional items',                  this.sizeHex, 2);

        if (provider.hasData(this.sizeDec)) {
            console.log(new Error("Not enough data for FlightConditionalItems"));
        }

        let conditionalData = new DataProvider(provider.getData(this.sizeDec));
        this.airlineNumericCode                     = new ConditionalItem('Airline Numeric Code',                       conditionalData.getData(3), 3);
        this.documentFormOrSerialNumber             = new ConditionalItem('Document Form/Serial Number',                conditionalData.getData(10), 10);
        this.selecteeIndicator                      = new ConditionalItem('Selectee indicator',                         conditionalData.getData(1), 1);
        this.internationalDocumentationVerification = new ConditionalItem('International Documentation Verification',   conditionalData.getData(1), 1);
        this.marketingCarrierDesignator             = new ConditionalItem('Marketing carrier designator',               conditionalData.getData(3), 3);
        this.frequentFlyerAirlineDesignator         = new ConditionalItem('Frequent Flyer Airline Designator',          conditionalData.getData(3), 3);
        this.frequentFlyerNumber                    = new ConditionalItem('Frequent Flyer Number',                      conditionalData.getData(16), 16);
        this.idOrAdIndicator                        = new ConditionalItem('ID/AD Indicator',                            conditionalData.getData(1), 1);
        this.freeBaggageAllowance                   = new ConditionalItem('Free Baggage Allowance',                     conditionalData.getData(3), 3);
        this.fastTrack                              = new ConditionalItem('Fast Track',                                 conditionalData.getData(1), 1);

        let individualSize = totalSize - 2 - this.sizeDec;
        if (individualSize < 0) {
            console.log(new Error("Something wrong with forIndividualAirlineUse size"));
        }
        this.forIndividualAirlineUse                = new ConditionalItem('For individual airline use',                 provider.getData(individualSize), individualSize)
    }
}

export default FlightConditionalItems;