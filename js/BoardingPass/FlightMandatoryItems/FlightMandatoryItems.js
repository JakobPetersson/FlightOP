import Item from "../Item";
import OperatingCarrierPNRCode from "./OperatingCarrierPNRCode";
import FromCityAirportCode from "./FromCityAirportCode";
import ToCityAirportCode from "./ToCityAirportCode";
import OperatingCarrierDesignator from "./OperatingCarrierDesignator";
import FlightNumber from "./FlightNumber";
import DateOfFlight from "./DateOfFlight";
import CompartmentCode from "./CompartmentCode";
import SeatNumber from "./SeatNumber";

class FlightMandatoryItems {
    constructor(provider) {
        if (!provider.hasData(37)) {
            console.log(new Error("Not enough data for FlightMandatoryItems"));
        }
        this.operatingCarrierPNRCode    = new OperatingCarrierPNRCode(provider);
        this.fromCityAirportCode        = new FromCityAirportCode(provider);
        this.toCityAirportCode          = new ToCityAirportCode(provider);
        this.operatingCarrierDesignator = new OperatingCarrierDesignator(provider);
        this.flightNumber               = new FlightNumber(provider);
        this.dateOfFlight               = new DateOfFlight(provider);
        this.compartmentCode            = new CompartmentCode(provider);
        this.seatNumber                 = new SeatNumber(provider);
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