import Item from "../Item";

class GeneralMandatoryItems {
    constructor(provider) {
        if (!provider.hasData(23)) {
            console.log(new Error("Not enough data for GeneralMandatoryItems"));
        }
        this.formatCode                 = new Item('Format Code',                   provider.getData(1), 1);
        this.numberOfLegsEncoded        = new Item('Number of Legs Encoded',        provider.getData(1), 1);
        this.passengerName              = new Item('Passenger Name',                provider.getData(20), 20);
        this.electronicTicketIndicator  = new Item('Electronic Ticket Indicator',   provider.getData(1), 1);
    }
}

export default GeneralMandatoryItems;