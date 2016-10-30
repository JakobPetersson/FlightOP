import Item from "../Item";

class ToCityAirportCode extends Item {
    constructor(provider) {
        super(38, 'To City Airport Code', provider.getData(3), 3);
    }
}

export default ToCityAirportCode;