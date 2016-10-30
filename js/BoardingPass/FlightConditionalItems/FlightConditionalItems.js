import ConditionalItem from "../ConditionalItem";
import DataProvider from "../DataProvider";
import AirlineNumericCode from "./AirlineNumericCode";
import DocumentFormOrSerialNumber from "./DocumentFormOrSerialNumber";
import SelecteeIndicator from "./SelecteeIndicator";
import InternationalDocumentationVerification from "./InternationalDocumentationVerification";
import MarketingCarrierDesignator from "./MarketingCarrierDesignator";

class FlightConditionalItems {
    constructor(provider, totalSize) {
        this.sizeHex = provider.getData(2);
        this.sizeDec = parseInt(this.sizeHex, 16);
        this.sizeOfConditional                      = new ConditionalItem(17, 'Size of conditional items',                  this.sizeHex, 2);

        if (provider.hasData(this.sizeDec)) {
            console.log(new Error("Not enough data for FlightConditionalItems"));
        }

        let conditionalData = new DataProvider(provider.getData(this.sizeDec));
        this.airlineNumericCode                     = new AirlineNumericCode(conditionalData);
        this.documentFormOrSerialNumber             = new DocumentFormOrSerialNumber(conditionalData);
        this.selecteeIndicator                      = new SelecteeIndicator(conditionalData);
        this.internationalDocumentationVerification = new InternationalDocumentationVerification(conditionalData);
        this.marketingCarrierDesignator             = new MarketingCarrierDesignator(conditionalData);
        this.frequentFlyerAirlineDesignator         = new ConditionalItem(20, 'Frequent Flyer Airline Designator',          conditionalData.getData(3), 3);
        this.frequentFlyerNumber                    = new ConditionalItem(236, 'Frequent Flyer Number',                      conditionalData.getData(16), 16);
        this.idOrAdIndicator                        = new ConditionalItem(89, 'ID/AD Indicator',                            conditionalData.getData(1), 1);
        this.freeBaggageAllowance                   = new ConditionalItem(118, 'Free Baggage Allowance',                     conditionalData.getData(3), 3);
        this.fastTrack                              = new ConditionalItem(254, 'Fast Track',                                 conditionalData.getData(1), 1);

        let individualSize = totalSize - 2 - this.sizeDec;
        if (individualSize < 0) {
            console.log(new Error("Something wrong with forIndividualAirlineUse size"));
        }
        this.forIndividualAirlineUse                = new ConditionalItem(4, 'For individual airline use',                 provider.getData(individualSize), individualSize)
    }
}

export default FlightConditionalItems;