import Item from "../../Item";

class AirlineDesignatorOfBoardingPassIssuer extends Item {
    constructor(provider) {
        super(21, 'Airline Designator of boarding pass issuer', provider.getData(3), 3);
    }
}

export default AirlineDesignatorOfBoardingPassIssuer;