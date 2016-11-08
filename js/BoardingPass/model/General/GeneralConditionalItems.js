class GeneralConditionalItems {
    constructor(beginningOfVersionNumber,
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
                secondNonConsecutiveBaggageTag) {

        this._beginningOfVersionNumber              = beginningOfVersionNumber;
        this._versionNumber                         = versionNumber;
        this._generalConditionalSize                = generalConditionalSize;
        this._passengerDescription                  = passengerDescription;
        this._sourceOfCheckIn                       = sourceOfCheckIn;
        this._sourceOfBoardingPassIssuance          = sourceOfBoardingPassIssuance;
        this._dateOfIssueOfBoardingPass             = dateOfIssueOfBoardingPass;
        this._documentType                          = documentType;
        this._airlineDesignatorOfBoardingPassIssuer = airlineDesignatorOfBoardingPassIssuer;
        this._baggageTag                            = baggageTag;
        this._firstNonConsecutiveBaggageTag         = firstNonConsecutiveBaggageTag;
        this._secondNonConsecutiveBaggageTag        = secondNonConsecutiveBaggageTag;
        
        this.beginningOfVersionNumber              = this.beginningOfVersionNumber.bind(this);
        this.versionNumber                         = this.versionNumber.bind(this);
        this.generalConditionalSize                = this.generalConditionalSize.bind(this);
        this.passengerDescription                  = this.passengerDescription.bind(this);
        this.sourceOfCheckIn                       = this.sourceOfCheckIn.bind(this);
        this.sourceOfBoardingPassIssuance          = this.sourceOfBoardingPassIssuance.bind(this);
        this.dateOfIssueOfBoardingPass             = this.dateOfIssueOfBoardingPass.bind(this);
        this.documentType                          = this.documentType.bind(this);
        this.airlineDesignatorOfBoardingPassIssuer = this.airlineDesignatorOfBoardingPassIssuer.bind(this);
        this.baggageTag                            = this.baggageTag.bind(this);
        this.firstNonConsecutiveBaggageTag         = this.firstNonConsecutiveBaggageTag.bind(this);
        this.secondNonConsecutiveBaggageTag        = this.secondNonConsecutiveBaggageTag.bind(this);

        this.totalSize = this.totalSize.bind(this);
        this.build = this.build.bind(this);
    }

    beginningOfVersionNumber() {
        return this._beginningOfVersionNumber;
    }

    versionNumber() {
        return this._versionNumber;
    }

    generalConditionalSize() {
        return this._generalConditionalSize;
    }

    passengerDescription() {
        return this._passengerDescription;
    }

    sourceOfCheckIn() {
        return this._sourceOfCheckIn;
    }

    sourceOfBoardingPassIssuance() {
        return this._sourceOfBoardingPassIssuance;
    }

    dateOfIssueOfBoardingPass() {
        return this._dateOfIssueOfBoardingPass;
    }

    documentType() {
        return this._documentType;
    }

    airlineDesignatorOfBoardingPassIssuer() {
        return this._airlineDesignatorOfBoardingPassIssuer;
    }

    baggageTag() {
        return this._baggageTag;
    }

    firstNonConsecutiveBaggageTag() {
        return this._firstNonConsecutiveBaggageTag;
    }

    secondNonConsecutiveBaggageTag() {
        return this._secondNonConsecutiveBaggageTag;
    }

    totalSize() {
        return (1 + 1 + 2 + this._generalConditionalSize.dec());
    }

    build() {
        console.log("GeneralConditionalItems.build()");

        const optional =
            this._passengerDescription.build() +
            this._sourceOfCheckIn.build() +
            this._sourceOfBoardingPassIssuance.build() +
            this._dateOfIssueOfBoardingPass.build() +
            this._documentType.build() +
            this._airlineDesignatorOfBoardingPassIssuer.build() +
            this._baggageTag.build() +
            this._firstNonConsecutiveBaggageTag.build() +
            this._secondNonConsecutiveBaggageTag.build();

        this._generalConditionalSize.setDec(optional.length);

        return this._beginningOfVersionNumber.build() +
            this._versionNumber.build() +
            this._generalConditionalSize.build() +
            optional;
    }
}

export default GeneralConditionalItems;