import DataProvider from "../../DataProvider";
import FlightConditionalSize from "./FlightConditionalSize";
import AirlineNumericCode from "./AirlineNumericCode";
import DocumentFormOrSerialNumber from "./DocumentFormOrSerialNumber";
import SelecteeIndicator from "./SelecteeIndicator";
import InternationalDocumentationVerification from "./InternationalDocumentationVerification";
import MarketingCarrierDesignator from "./MarketingCarrierDesignator";
import FrequentFlyerAirlineDesignator from "./FrequentFlyerAirlineDesignator";
import FrequentFlyerNumber from "./FrequentFlyerNumber";
import IdOrAdIndicator from "./IdOrAdIndicator";
import FreeBaggageAllowance from "./FreeBaggageAllowance";
import FastTrack from "./FastTrack";
import ForIndividualAirlineUse from "./ForIndividualAirlineUse";

class FlightConditionalItems {
    constructor(provider, totalSize) {
        this.flightConditionalSize                  = new FlightConditionalSize(provider);

        if (!provider.hasData(this.flightConditionalSize.dec())) {
            console.log(new Error("Not enough data for FlightConditionalItems"));
        }

        let conditionalData = new DataProvider(provider.getData(this.flightConditionalSize.dec()));
        this.airlineNumericCode                     = new AirlineNumericCode(conditionalData);
        this.documentFormOrSerialNumber             = new DocumentFormOrSerialNumber(conditionalData);
        this.selecteeIndicator                      = new SelecteeIndicator(conditionalData);
        this.internationalDocumentationVerification = new InternationalDocumentationVerification(conditionalData);
        this.marketingCarrierDesignator             = new MarketingCarrierDesignator(conditionalData);
        this.frequentFlyerAirlineDesignator         = new FrequentFlyerAirlineDesignator(conditionalData);
        this.frequentFlyerNumber                    = new FrequentFlyerNumber(conditionalData);
        this.idOrAdIndicator                        = new IdOrAdIndicator(conditionalData);
        this.freeBaggageAllowance                   = new FreeBaggageAllowance(conditionalData);
        this.fastTrack                              = new FastTrack(conditionalData);

        let individualSize = totalSize - 2 - this.flightConditionalSize.dec();
        if (individualSize < 0) {
            console.log(new Error("Something wrong with forIndividualAirlineUse size"));
        }
        this.forIndividualAirlineUse                = new ForIndividualAirlineUse(provider, individualSize);
    }
}

export default FlightConditionalItems;