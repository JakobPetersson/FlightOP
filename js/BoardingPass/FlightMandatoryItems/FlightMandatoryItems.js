import Item from "../Item";

class FlightMandatoryItems {
    constructor(provider) {
        if (!provider.hasData(37)) {
            console.log(new Error("Not enough data for FlightMandatoryItems"));
        }
        this.operatingCarrierPNRCode    = new Item('Operating carrier PNR Code',    provider.getData(7), 7);
        this.fromCityAirportCode        = new Item('From City Airport Code',        provider.getData(3), 3);
        this.toCityAirportCode          = new Item('To City Airport Code',          provider.getData(3), 3);
        this.operatingCarrierDesignator = new Item('Operating carrier Designator',  provider.getData(3), 3);
        this.flightNumber               = new Item('Flight Number',                 provider.getData(5), 5);
        this.dateOfFlight               = new Item('Date of Flight',                provider.getData(3), 3);
        this.compartmentCode            = new Item('Compartment Code',              provider.getData(1), 1);
        this.seatNumber                 = new Item('Seat Number',                   provider.getData(4), 4);
        this.checkInSequenceNumber      = new Item('Check-In Sequence Number',      provider.getData(5), 5);
        this.passengerStatus            = new Item('Passenger Status',              provider.getData(1), 1);

        this.sizeHex = provider.getData(2);
        this.sizeDec = parseInt(this.sizeHex, 16);
        this.sizeOfAllConditional       = new Item('Size of variable size field',   this.sizeHex, 2);

        this.sizeOfAllConditionals = this.sizeOfAllConditionals.bind(this);
        this.hasConditionalItems = this.hasConditionalItems.bind(this);
    }

    sizeOfAllConditionals() {
        return this.sizeDec;
    }

    hasConditionalItems() {
        return (this.sizeDec > 0);
    }
}

export default FlightMandatoryItems;