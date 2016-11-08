import DataProvider from "../../DataProvider";
import BeginningOfVersionNumber from "./Conditional/BeginningOfVersionNumber";
import VersionNumber from "./Conditional/VersionNumber";
import GeneralConditionalSize from "./Conditional/GeneralConditionalSize";
import PassengerDescription from "./Conditional/PassengerDescription";
import SourceOfCheckIn from "./Conditional/SourceOfCheckIn";
import SourceOfBoardingPassIssuance from "./Conditional/SourceOfBoardingPassIssuance";
import DateOfIssueOfBoardingPass from "./Conditional/DateOfIssueOfBoardingPass";
import DocumentType from "./Conditional/DocumentType";
import AirlineDesignatorOfBoardingPassIssuer from "./Conditional/AirlineDesignatorOfBoardingPassIssuer";
import BaggageTag from "./Conditional/BaggageTag";
import FirstNonConsecutiveBaggageTag from "./Conditional/FirstNonConsecutiveBaggageTag";
import SecondNonConsecutiveBaggageTag from "./Conditional/SecondNonConsecutiveBaggageTag";
import GeneralConditionalItems from "./GeneralConditionalItems";

class GeneralConditionalItemsBuilder {
    static build(provider) {
        const beginningOfVersionNumber              = new BeginningOfVersionNumber(provider.getData(1));
        const versionNumber                         = new VersionNumber(provider.getData(1));

        const generalConditionalSize                = new GeneralConditionalSize(provider.getData(2));

        if (!provider.hasData(generalConditionalSize.dec())) {
            console.log(new Error("Not enough data for GeneralConditionalItems"));
        }

        const conditionalData = new DataProvider(provider.getData(generalConditionalSize.dec()));
        const passengerDescription                  = new PassengerDescription(conditionalData.getData(1));
        const sourceOfCheckIn                       = new SourceOfCheckIn(conditionalData.getData(1));
        const sourceOfBoardingPassIssuance          = new SourceOfBoardingPassIssuance(conditionalData.getData(1));
        const dateOfIssueOfBoardingPass             = new DateOfIssueOfBoardingPass(conditionalData.getData(4));
        const documentType                          = new DocumentType(conditionalData.getData(1));
        const airlineDesignatorOfBoardingPassIssuer = new AirlineDesignatorOfBoardingPassIssuer(conditionalData.getData(3));
        const baggageTag                            = new BaggageTag(conditionalData.getData(13));
        const firstNonConsecutiveBaggageTag         = new FirstNonConsecutiveBaggageTag(conditionalData.getData(13));
        const secondNonConsecutiveBaggageTag        = new SecondNonConsecutiveBaggageTag(conditionalData.getData(13));

        return new GeneralConditionalItems(
            beginningOfVersionNumber,
            versionNumber,
            generalConditionalSize,
            passengerDescription,
            sourceOfCheckIn,
            sourceOfBoardingPassIssuance,
            dateOfIssueOfBoardingPass,
            documentType,
            airlineDesignatorOfBoardingPassIssuer,
            baggageTag,
            firstNonConsecutiveBaggageTag,
            secondNonConsecutiveBaggageTag
        );
    }
}

export default GeneralConditionalItemsBuilder;