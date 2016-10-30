import Item from "../../Item";
import DataProvider from "../../DataProvider";
import BeginningOfVersionNumber from "./BeginningOfVersionNumber";
import VersionNumber from "./VersionNumber";
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

        this.sizeHex = provider.getData(2);
        this.sizeDec = parseInt(this.sizeHex, 16);
        this.sizeOfConditional                     = new Item(10, 'Size of conditional items',      this.sizeHex, 2);

        if (!provider.hasData(this.sizeDec)) {
            console.log(new Error("Not enough data for GeneralConditionalItems"));
        }

        let conditionalData = new DataProvider(provider.getData(this.sizeDec));
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
    }

    totalSize() {
        return (1 + 1 + 2 + this.sizeDec);
    }
}

export default GeneralConditionalItems;