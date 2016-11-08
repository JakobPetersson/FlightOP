import DataProvider from "../../DataProvider";
import FlightConditionalSize from "./Conditional/FlightConditionalSize";
import AirlineNumericCode from "./Conditional/AirlineNumericCode";
import DocumentFormOrSerialNumber from "./Conditional/DocumentFormOrSerialNumber";
import SelecteeIndicator from "./Conditional/SelecteeIndicator";
import InternationalDocumentationVerification from "./Conditional/InternationalDocumentationVerification";
import MarketingCarrierDesignator from "./Conditional/MarketingCarrierDesignator";
import FrequentFlyerAirlineDesignator from "./Conditional/FrequentFlyerAirlineDesignator";
import FrequentFlyerNumber from "./Conditional/FrequentFlyerNumber";
import IdOrAdIndicator from "./Conditional/IdOrAdIndicator";
import FreeBaggageAllowance from "./Conditional/FreeBaggageAllowance";
import FastTrack from "./Conditional/FastTrack";
import ForIndividualAirlineUse from "./Conditional/ForIndividualAirlineUse";
import FlightConditionalItems from "./FlightConditionalItems";

class FlightConditionalItemsBuilder {
    static build(provider, totalSize) {
        const flightConditionalSize                  = new FlightConditionalSize(provider.getData(2));

        if (!provider.hasData(flightConditionalSize.dec())) {
            console.log(new Error("Not enough data for FlightConditionalItems"));
        }

        const conditionalData = new DataProvider(provider.getData(flightConditionalSize.dec()));
        const airlineNumericCode                     = new AirlineNumericCode(conditionalData.getData(3));
        const documentFormOrSerialNumber             = new DocumentFormOrSerialNumber(conditionalData.getData(10));
        const selecteeIndicator                      = new SelecteeIndicator(conditionalData.getData(1));
        const internationalDocumentationVerification = new InternationalDocumentationVerification(conditionalData.getData(1));
        const marketingCarrierDesignator             = new MarketingCarrierDesignator(conditionalData.getData(3));
        const frequentFlyerAirlineDesignator         = new FrequentFlyerAirlineDesignator(conditionalData.getData(3));
        const frequentFlyerNumber                    = new FrequentFlyerNumber(conditionalData.getData(16));
        const idOrAdIndicator                        = new IdOrAdIndicator(conditionalData.getData(1));
        const freeBaggageAllowance                   = new FreeBaggageAllowance(conditionalData.getData(3));
        const fastTrack                              = new FastTrack(conditionalData.getData(1));

        const individualSize = totalSize - 2 - flightConditionalSize.dec();
        if (individualSize < 0) {
            console.log(new Error("Something wrong with forIndividualAirlineUse size"));
        }
        const forIndividualAirlineUse                = new ForIndividualAirlineUse(provider.getData(individualSize), individualSize);

        return new FlightConditionalItems(
            flightConditionalSize,
            airlineNumericCode,
            documentFormOrSerialNumber,
            selecteeIndicator,
            internationalDocumentationVerification,
            marketingCarrierDesignator,
            frequentFlyerAirlineDesignator,
            frequentFlyerNumber,
            idOrAdIndicator,
            freeBaggageAllowance,
            fastTrack,
            forIndividualAirlineUse
        );
    }
}

export default FlightConditionalItemsBuilder;