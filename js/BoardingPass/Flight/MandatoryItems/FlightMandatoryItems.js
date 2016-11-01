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

        this.build = this.build.bind(this);
    }

    hasConditionalItems() {
        return (this.allConditionalSize.dec() > 0);
    }

    build() {
        console.log("FlightMandatoryItems.build()");
        return this.operatingCarrierPNRCode.build() +
            this.fromCityAirportCode.build() +
            this.toCityAirportCode.build() +
            this.operatingCarrierDesignator.build() +
            this.flightNumber.build() +
            this.dateOfFlight.build() +
            this.compartmentCode.build() +
            this.seatNumber.build() +
            this.checkInSequenceNumber.build() +
            this.passengerStatus.build() +
            this.allConditionalSize.build();
    }
}

export default FlightMandatoryItems;