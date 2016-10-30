import Item from "../../Item";

class FlightNumber extends Item {
    constructor(provider) {
        super(43, 'Flight Number', provider.getData(5), 5);
    }
}

export default FlightNumber;