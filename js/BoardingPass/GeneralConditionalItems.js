import ConditionalItem from "./ConditionalItem";
import DataProvider from "./DataProvider";

class GeneralConditionalItems {
    constructor(provider) {
        this.beginningOfVersionNumber   = new ConditionalItem('Beginning of version number',    provider.getData(1), 1);
        this.versionNumber              = new ConditionalItem('Version Number',                 provider.getData(1), 1);

        this.sizeHex = provider.getData(2);
        this.sizeDec = parseInt(this.sizeHex, 16);
        this.sizeOfConditional          = new ConditionalItem('Size of conditional items',      this.sizeHex, 2);

        if (!provider.hasData(this.sizeDec)) {
            console.log(new Error("Not enough data for GeneralConditionalItems"));
        }

        let conditionalData = new DataProvider(provider.getData(this.sizeDec));
        this.passengerDescription                   = new ConditionalItem('Passenger Description',                                  conditionalData.getData(1), 1);
        this.sourceOfCheckIn                        = new ConditionalItem('Source of check-in',                                     conditionalData.getData(1), 1);
        this.sourceOfBoardingPassIssuance           = new ConditionalItem('Source of Boarding Pass Issuance',                       conditionalData.getData(1), 1);
        this.dateOfIssueOfBoardingPass              = new ConditionalItem('Date of Issue of Boarding Pass',                         conditionalData.getData(4), 4);
        this.documentType                           = new ConditionalItem('Document Type',                                          conditionalData.getData(1), 4);
        this.airlineDesignatorOfBoardingPassIssuer  = new ConditionalItem('Airline Designator of boarding pass issuer',             conditionalData.getData(3), 3);
        this.baggageTag                             = new ConditionalItem('Baggage Tag Licence Plate Number(s)',                    conditionalData.getData(13), 13);
        this.firstNonConsecutiveBaggageTag          = new ConditionalItem('1st Non-Consecutive Baggage Tag Licence Plate Number',   conditionalData.getData(13), 13);
        this.secondNonConsecutiveBaggageTag         = new ConditionalItem('2nd Non-Consecutive Baggage Tag Licence Plate Number',   conditionalData.getData(13), 13);
    }
}

export default GeneralConditionalItems;