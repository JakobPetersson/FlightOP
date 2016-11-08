import OperatingCarrierPNRCode from "./Mandatory/OperatingCarrierPNRCode";
import FromCityAirportCode from "./Mandatory/FromCityAirportCode";
import ToCityAirportCode from "./Mandatory/ToCityAirportCode";
import OperatingCarrierDesignator from "./Mandatory/OperatingCarrierDesignator";
import FlightNumber from "./Mandatory/FlightNumber";
import DateOfFlight from "./Mandatory/DateOfFlight";
import CompartmentCode from "./Mandatory/CompartmentCode";
import SeatNumber from "./Mandatory/SeatNumber";
import CheckInSequenceNumber from "./Mandatory/CheckInSequenceNumber";
import PassengerStatus from "./Mandatory/PassengerStatus";
import AllConditionalSize from "./Mandatory/AllConditionalSize";
import FlightMandatoryItems from "./FlightMandatoryItems";

class FlightMandatoryItemsBuilder {
    static build(provider) {
        if (!provider.hasData(37)) {
            console.log(new Error("Not enough data for FlightMandatoryItems"));
        }

        const operatingCarrierPNRCode    = new OperatingCarrierPNRCode(provider.getData(7));
        const fromCityAirportCode        = new FromCityAirportCode(provider.getData(3));
        const toCityAirportCode          = new ToCityAirportCode(provider.getData(3));
        const operatingCarrierDesignator = new OperatingCarrierDesignator(provider.getData(3));
        const flightNumber               = new FlightNumber(provider.getData(5));
        const dateOfFlight               = new DateOfFlight(provider.getData(3));
        const compartmentCode            = new CompartmentCode(provider.getData(1));
        const seatNumber                 = new SeatNumber(provider.getData(4));
        const checkInSequenceNumber      = new CheckInSequenceNumber(provider.getData(5));
        const passengerStatus            = new PassengerStatus(provider.getData(1));
        const allConditionalSize         = new AllConditionalSize(provider.getData(2));

        return new FlightMandatoryItems(
            operatingCarrierPNRCode,
            fromCityAirportCode,
            toCityAirportCode,
            operatingCarrierDesignator,
            flightNumber,
            dateOfFlight,
            compartmentCode,
            seatNumber,
            checkInSequenceNumber,
            passengerStatus,
            allConditionalSize
        );
    }
}

export default FlightMandatoryItemsBuilder;