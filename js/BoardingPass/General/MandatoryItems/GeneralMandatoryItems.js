import FormatCode from "./FormatCode";
import NumberOfLegsEncoded from "./NumberOfLegsEncoded";
import PassengerName from "./PassengerName";
import ElectronicTicketIndicator from "./ElectronicTicketIndicator";

class GeneralMandatoryItems {
    constructor(provider) {
        if (!provider.hasData(23)) {
            console.log(new Error("Not enough data for GeneralMandatoryItems"));
        }

        this.formatCode                 = new FormatCode(provider);
        this.numberOfLegsEncoded        = new NumberOfLegsEncoded(provider);
        this.passengerName              = new PassengerName(provider);
        this.electronicTicketIndicator  = new ElectronicTicketIndicator(provider);

        this.build = this.build.bind(this);
    }

    build() {
        console.log("GeneralMandatoryItems.build()");
        return this.formatCode.build() +
            this.numberOfLegsEncoded.build() +
            this.passengerName.build() +
            this.electronicTicketIndicator.build();
    }
}

export default GeneralMandatoryItems;