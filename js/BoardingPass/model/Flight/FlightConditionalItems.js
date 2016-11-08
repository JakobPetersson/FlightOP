class FlightConditionalItems {
    constructor(flightConditionalSize,
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
                forIndividualAirlineUse) {

        this._flightConditionalSize                  = flightConditionalSize;
        this._airlineNumericCode                     = airlineNumericCode;
        this._documentFormOrSerialNumber             = documentFormOrSerialNumber;
        this._selecteeIndicator                      = selecteeIndicator;
        this._internationalDocumentationVerification = internationalDocumentationVerification;
        this._marketingCarrierDesignator             = marketingCarrierDesignator;
        this._frequentFlyerAirlineDesignator         = frequentFlyerAirlineDesignator;
        this._frequentFlyerNumber                    = frequentFlyerNumber;
        this._idOrAdIndicator                        = idOrAdIndicator;
        this._freeBaggageAllowance                   = freeBaggageAllowance;
        this._fastTrack                              = fastTrack;
        this._forIndividualAirlineUse                = forIndividualAirlineUse;
        
        this.flightConditionalSize                  = this.flightConditionalSize.bind(this);
        this.airlineNumericCode                     = this.airlineNumericCode.bind(this);
        this.documentFormOrSerialNumber             = this.documentFormOrSerialNumber.bind(this);
        this.selecteeIndicator                      = this.selecteeIndicator.bind(this);
        this.internationalDocumentationVerification = this.internationalDocumentationVerification.bind(this);
        this.marketingCarrierDesignator             = this.marketingCarrierDesignator.bind(this);
        this.frequentFlyerAirlineDesignator         = this.frequentFlyerAirlineDesignator.bind(this);
        this.frequentFlyerNumber                    = this.frequentFlyerNumber.bind(this);
        this.idOrAdIndicator                        = this.idOrAdIndicator.bind(this);
        this.freeBaggageAllowance                   = this.freeBaggageAllowance.bind(this);
        this.fastTrack                              = this.fastTrack.bind(this);
        this.forIndividualAirlineUse                = this.forIndividualAirlineUse.bind(this);

        this.build = this.build.bind(this);
    }

    flightConditionalSize() {
        return this._flightConditionalSize;
    }

    airlineNumericCode() {
        return this._airlineNumericCode;
    }

    documentFormOrSerialNumber() {
        return this._documentFormOrSerialNumber;
    }

    selecteeIndicator() {
        return this._selecteeIndicator;
    }

    internationalDocumentationVerification() {
        return this._internationalDocumentationVerification;
    }

    marketingCarrierDesignator() {
        return this._marketingCarrierDesignator;
    }

    frequentFlyerAirlineDesignator() {
        return this._frequentFlyerAirlineDesignator;
    }

    frequentFlyerNumber() {
        return this._frequentFlyerNumber;
    }

    idOrAdIndicator() {
        return this._idOrAdIndicator;
    }

    freeBaggageAllowance() {
        return this._freeBaggageAllowance;
    }

    fastTrack() {
        return this._fastTrack;
    }

    forIndividualAirlineUse() {
        return this._forIndividualAirlineUse;
    }

    build() {
        console.log("FlightConditionalItems.build()");

        const optional =
            this._airlineNumericCode.build() +
            this._documentFormOrSerialNumber.build() +
            this._selecteeIndicator.build() +
            this._internationalDocumentationVerification.build() +
            this._marketingCarrierDesignator.build() +
            this._frequentFlyerAirlineDesignator.build() +
            this._frequentFlyerNumber.build() +
            this._idOrAdIndicator.build() +
            this._freeBaggageAllowance.build() +
            this._fastTrack.build();

        this._flightConditionalSize.setDec(optional.length);

        return this._flightConditionalSize.build() +
            optional +
            this._forIndividualAirlineUse.build();
    }
}

export default FlightConditionalItems;