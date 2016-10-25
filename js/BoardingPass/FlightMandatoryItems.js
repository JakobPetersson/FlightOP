import DataConsumer from "./DataConsumer";
import Item from "./Item";

class FlightMandatoryItems {
    constructor(rawData) {
        if (rawData.length != 35) {
            console.log(new Error("Wrong data length for flight mandatory items"));
        }
        let data = new DataConsumer(rawData);
        this.operatingCarrierPNRCode    = new Item('Operating carrier PNR Code',    data.getData(7), 7);
        this.fromCityAirportCode        = new Item('From City Airport Code',        data.getData(3), 3);
        this.toCityAirportCode          = new Item('To City Airport Code',          data.getData(3), 3);
        this.operatingCarrierDesignator = new Item('Operating carrier Designator',  data.getData(3), 3);
        this.flightNumber               = new Item('Flight Number',                 data.getData(5), 5);
        this.dateOfFlight               = new Item('Date of Flight',                data.getData(3), 3);
        this.compartmentCode            = new Item('Compartment Code',              data.getData(1), 1);
        this.seatNumber                 = new Item('Seat Number',                   data.getData(4), 4);
        this.checkInSequenceNumber      = new Item('Check-In Sequence Number',      data.getData(5), 5);
        this.passengerStatus            = new Item('Passenger Status',              data.getData(1), 1);
    }
}

export default FlightMandatoryItems;