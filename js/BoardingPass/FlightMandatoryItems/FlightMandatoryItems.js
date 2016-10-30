import Item from "../Item";
import OperatingCarrierPNRCode from "./OperatingCarrierPNRCode";
import FromCityAirportCode from "./FromCityAirportCode";
import ToCityAirportCode from "./ToCityAirportCode";

class FlightMandatoryItems {
    constructor(provider) {
        if (!provider.hasData(37)) {
            console.log(new Error("Not enough data for FlightMandatoryItems"));
        }
        this.operatingCarrierPNRCode    = new OperatingCarrierPNRCode(provider);
        this.fromCityAirportCode        = new FromCityAirportCode(provider);
        this.toCityAirportCode          = new ToCityAirportCode(provider);
        this.operatingCarrierDesignator = new Item(0, 'Operating carrier Designator',  provider.getData(3), 3);
        this.flightNumber               = new Item(0, 'Flight Number',                 provider.getData(5), 5);
        this.dateOfFlight               = new Item(0, 'Date of Flight',                provider.getData(3), 3);
        this.compartmentCode            = new Item(0, 'Compartment Code',              provider.getData(1), 1);
        this.seatNumber                 = new Item(0, 'Seat Number',                   provider.getData(4), 4);
        this.checkInSequenceNumber      = new Item(0, 'Check-In Sequence Number',      provider.getData(5), 5);
        this.passengerStatus            = new Item(0, 'Passenger Status',              provider.getData(1), 1);

        this.sizeHex = provider.getData(2);
        this.sizeDec = parseInt(this.sizeHex, 16);
        this.sizeOfAllConditional       = new Item(0, 'Size of variable size field',   this.sizeHex, 2);

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