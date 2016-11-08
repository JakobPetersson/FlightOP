class GeneralMandatoryItems {
    constructor(formatCode,
                numberOfLegsEncoded,
                passengerName,
                electronicTicketIndicator) {
        this._formatCode = formatCode;
        this._numberOfLegsEncoded = numberOfLegsEncoded;
        this._passengerName = passengerName;
        this._electronicTicketIndicator = electronicTicketIndicator;

        this.formatCode = this.formatCode.bind(this);
        this.numberOfLegsEncoded = this.numberOfLegsEncoded.bind(this);
        this.passengerName = this.passengerName.bind(this);
        this.electronicTicketIndicator = this.electronicTicketIndicator.bind(this);
    }

    formatCode() {
        return this._formatCode;
    }

    numberOfLegsEncoded() {
        return this._numberOfLegsEncoded;
    }

    passengerName() {
        return this._passengerName;
    }

    electronicTicketIndicator() {
        return this._electronicTicketIndicator;
    }

    build() {
        console.log("GeneralMandatoryItems.build()");
        return this._formatCode.build() +
            this._numberOfLegsEncoded.build() +
            this._passengerName.build() +
            this._electronicTicketIndicator.build();
    }
}

export default GeneralMandatoryItems;