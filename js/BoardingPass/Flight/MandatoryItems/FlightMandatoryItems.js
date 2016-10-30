import OperatingCarrierPNRCode from "./OperatingCarrierPNRCode";
import FromCityAirportCode from "./FromCityAirportCode";
import ToCityAirportCode from "./ToCityAirportCode";
import OperatingCarrierDesignator from "./OperatingCarrierDesignator";
import FlightNumber from "./FlightNumber";
import DateOfFlight from "./DateOfFlight";
import CompartmentCode from "./CompartmentCode";
import SeatNumber from "./SeatNumber";
import CheckInSequenceNumber from "./CheckInSequenceNumber";
import PassengerStatus from "./PassengerStatus";
import AllConditionalSize from "./AllConditionalSize";

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
        this.checkInSequenceNumber      = new CheckInSequenceNumber(provider);
        this.passengerStatus            = new PassengerStatus(provider);
        this.allConditionalSize         = new AllConditionalSize(provider);

        this.hasConditionalItems = this.hasConditionalItems.bind(this);
    }

    hasConditionalItems() {
        return (this.allConditionalSize.dec() > 0);
    }
}

export default FlightMandatoryItems;