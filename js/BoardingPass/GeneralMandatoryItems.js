import DataConsumer from "./DataConsumer";
import Item from "./Item";

class GeneralMandatoryItems {
    constructor(rawData) {
        if (rawData.length != 23) {
            console.log(new Error("Flight, wrong data length for mandatory unique items"));
        }
        let data = new DataConsumer(rawData);
        this.formatCode                 = new Item('Format Code',                   data.getData(1), 1);
        this.numberOfLegsEncoded        = new Item('Number of Legs Encoded',        data.getData(1), 1);
        this.passengerName              = new Item('Passenger Name',                data.getData(20), 20);
        this.electronicTicketIndicator  = new Item('Electronic Ticket Indicator',   data.getData(1), 1);
    }
}

export default GeneralMandatoryItems;