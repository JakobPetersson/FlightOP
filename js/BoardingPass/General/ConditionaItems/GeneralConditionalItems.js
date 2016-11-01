import DataProvider from "../../DataProvider";
import BeginningOfVersionNumber from "./BeginningOfVersionNumber";
import VersionNumber from "./VersionNumber";
import GeneralConditionalSize from "./GeneralConditionalSize";
import PassengerDescription from "./PassengerDescription";
import SourceOfCheckIn from "./SourceOfCheckIn";
import SourceOfBoardingPassIssuance from "./SourceOfBoardingPassIssuance";
import DateOfIssueOfBoardingPass from "./DateOfIssueOfBoardingPass";
import DocumentType from "./DocumentType";
import AirlineDesignatorOfBoardingPassIssuer from "./AirlineDesignatorOfBoardingPassIssuer";
import BaggageTag from "./BaggageTag";
import FirstNonConsecutiveBaggageTag from "./FirstNonConsecutiveBaggageTag";
import SecondNonConsecutiveBaggageTag from "./SecondNonConsecutiveBaggageTag";

class GeneralConditionalItems {
    constructor(provider) {
        this.beginningOfVersionNumber              = new BeginningOfVersionNumber(provider);
        this.versionNumber                         = new VersionNumber(provider);

        this.generalConditionalSize                = new GeneralConditionalSize(provider);

        if (!provider.hasData(this.generalConditionalSize.dec())) {
            console.log(new Error("Not enough data for GeneralConditionalItems"));
        }

        let conditionalData = new DataProvider(provider.getData(this.generalConditionalSize.dec()));
        this.passengerDescription                  = new PassengerDescription(conditionalData);
        this.sourceOfCheckIn                       = new SourceOfCheckIn(conditionalData);
        this.sourceOfBoardingPassIssuance          = new SourceOfBoardingPassIssuance(conditionalData);
        this.dateOfIssueOfBoardingPass             = new DateOfIssueOfBoardingPass(conditionalData);
        this.documentType                          = new DocumentType(conditionalData);
        this.airlineDesignatorOfBoardingPassIssuer = new AirlineDesignatorOfBoardingPassIssuer(conditionalData);
        this.baggageTag                            = new BaggageTag(conditionalData);
        this.firstNonConsecutiveBaggageTag         = new FirstNonConsecutiveBaggageTag(conditionalData);
        this.secondNonConsecutiveBaggageTag        = new SecondNonConsecutiveBaggageTag(conditionalData);

        this.totalSize = this.totalSize.bind(this);

        this.build = this.build.bind(this);
    }

    totalSize() {
        return (1 + 1 + 2 + this.generalConditionalSize.dec());
    }

    build() {
        console.log("GeneralConditionalItems.build()");

        let optional =
            this.passengerDescription.build() +
            this.sourceOfCheckIn.build() +
            this.sourceOfBoardingPassIssuance.build() +
            this.dateOfIssueOfBoardingPass.build() +
            this.documentType.build() +
            this.airlineDesignatorOfBoardingPassIssuer.build() +
            this.baggageTag.build() +
            this.firstNonConsecutiveBaggageTag.build() +
            this.secondNonConsecutiveBaggageTag.build();

        this.generalConditionalSize.setDec(optional.length);

        return this.beginningOfVersionNumber.build() +
            this.versionNumber.build() +
            this.generalConditionalSize.build() +
            optional;
    }
}

export default GeneralConditionalItems;