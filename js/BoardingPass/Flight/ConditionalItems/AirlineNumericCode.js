import Item from "../../Item";

class AirlineNumericCode extends Item {
    constructor(provider) {
        super(142, 'Airline Numeric Code', provider.getData(3), 3);
    }
}

export default AirlineNumericCode;