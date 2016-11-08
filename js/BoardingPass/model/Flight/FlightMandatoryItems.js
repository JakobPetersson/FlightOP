class FlightMandatoryItems {
    constructor(operatingCarrierPNRCode,
                fromCityAirportCode,
                toCityAirportCode,
                operatingCarrierDesignator,
                flightNumber,
                dateOfFlight,
                compartmentCode,
                seatNumber,
                checkInSequenceNumber,
                passengerStatus,
                allConditionalSize) {
        this._operatingCarrierPNRCode    = operatingCarrierPNRCode;
        this._fromCityAirportCode        = fromCityAirportCode;
        this._toCityAirportCode          = toCityAirportCode;
        this._operatingCarrierDesignator = operatingCarrierDesignator;
        this._flightNumber               = flightNumber;
        this._dateOfFlight               = dateOfFlight;
        this._compartmentCode            = compartmentCode;
        this._seatNumber                 = seatNumber;
        this._checkInSequenceNumber      = checkInSequenceNumber;
        this._passengerStatus            = passengerStatus;
        this._allConditionalSize         = allConditionalSize;

        this.operatingCarrierPNRCode = this.operatingCarrierPNRCode.bind(this);
        this.fromCityAirportCode = this.fromCityAirportCode.bind(this);
        this.toCityAirportCode = this.toCityAirportCode.bind(this);
        this.operatingCarrierDesignator = this.operatingCarrierDesignator.bind(this);
        this.flightNumber = this.flightNumber.bind(this);
        this.dateOfFlight = this.dateOfFlight.bind(this);
        this.compartmentCode = this.compartmentCode.bind(this);
        this.seatNumber = this.seatNumber.bind(this);
        this.checkInSequenceNumber = this.checkInSequenceNumber.bind(this);
        this.passengerStatus = this.passengerStatus.bind(this);
        this.allConditionalSize = this.allConditionalSize.bind(this);

        this.hasConditionalItems = this.hasConditionalItems.bind(this);
        this.build = this.build.bind(this);
    }

    operatingCarrierPNRCode() {
        return this._operatingCarrierPNRCode;
    }

    fromCityAirportCode() {
        return this._fromCityAirportCode;
    }

    toCityAirportCode() {
        return this._toCityAirportCode;
    }

    operatingCarrierDesignator() {
        return this._operatingCarrierDesignator;
    }

    flightNumber() {
        return this._flightNumber;
    }

    dateOfFlight() {
        return this._dateOfFlight;
    }

    compartmentCode() {
        return this._compartmentCode;
    }

    seatNumber() {
        return this._seatNumber;
    }

    checkInSequenceNumber() {
        return this._checkInSequenceNumber;
    }

    passengerStatus() {
        return this._passengerStatus;
    }

    allConditionalSize() {
        return this._allConditionalSize;
    }

    hasConditionalItems() {
        return (this._allConditionalSize.dec() > 0);
    }

    build() {
        console.log("FlightMandatoryItems.build()");
        return this._operatingCarrierPNRCode.build() +
            this._fromCityAirportCode.build() +
            this._toCityAirportCode.build() +
            this._operatingCarrierDesignator.build() +
            this._flightNumber.build() +
            this._dateOfFlight.build() +
            this._compartmentCode.build() +
            this._seatNumber.build() +
            this._checkInSequenceNumber.build() +
            this._passengerStatus.build() +
            this._allConditionalSize.build();
    }
}

export default FlightMandatoryItems;