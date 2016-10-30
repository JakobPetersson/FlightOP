import Item from "../../Item";

class FromCityAirportCode extends Item {
    constructor(provider) {
        super(26, 'From City Airport Code', provider.getData(3), 3);
    }
}

export default FromCityAirportCode;