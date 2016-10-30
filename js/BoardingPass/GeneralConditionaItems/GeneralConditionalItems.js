import ConditionalItem from "../ConditionalItem";
import DataProvider from "../DataProvider";
import BeginningOfVersionNumber from "./BeginningOfVersionNumber";
import VersionNumber from "./VersionNumber";
import PassengerDescription from "./PassengerDescription";
import SourceOfCheckIn from "./SourceOfCheckIn";
import SourceOfBoardingPassIssuance from "./SourceOfBoardingPassIssuance";
import DateOfIssueOfBoardingPass from "./DateOfIssueOfBoardingPass";

class GeneralConditionalItems {
    constructor(provider) {
        this.beginningOfVersionNumber = new BeginningOfVersionNumber(provider);
        this.versionNumber = new VersionNumber(provider);

        this.sizeHex = provider.getData(2);
        this.sizeDec = parseInt(this.sizeHex, 16);
        this.sizeOfConditional          = new ConditionalItem(0, 'Size of conditional items',      this.sizeHex, 2);

        if (!provider.hasData(this.sizeDec)) {
            console.log(new Error("Not enough data for GeneralConditionalItems"));
        }

        let conditionalData = new DataProvider(provider.getData(this.sizeDec));
        this.passengerDescription = new PassengerDescription(conditionalData);
        this.sourceOfCheckIn = new SourceOfCheckIn(conditionalData);
        this.sourceOfBoardingPassIssuance = new SourceOfBoardingPassIssuance(conditionalData);
        this.dateOfIssueOfBoardingPass = new DateOfIssueOfBoardingPass(conditionalData);
        this.documentType                           = new ConditionalItem(0, 'Document Type',                                          conditionalData.getData(1), 4);
        this.airlineDesignatorOfBoardingPassIssuer  = new ConditionalItem(0, 'Airline Designator of boarding pass issuer',             conditionalData.getData(3), 3);
        this.baggageTag                             = new ConditionalItem(0, 'Baggage Tag Licence Plate Number(s)',                    conditionalData.getData(13), 13);
        this.firstNonConsecutiveBaggageTag          = new ConditionalItem(0, '1st Non-Consecutive Baggage Tag Licence Plate Number',   conditionalData.getData(13), 13);
        this.secondNonConsecutiveBaggageTag         = new ConditionalItem(0, '2nd Non-Consecutive Baggage Tag Licence Plate Number',   conditionalData.getData(13), 13);

        this.totalSize = this.totalSize.bind(this);
    }

    totalSize() {
        return (1 + 1 + 2 + this.sizeDec);
    }
}

export default GeneralConditionalItems;