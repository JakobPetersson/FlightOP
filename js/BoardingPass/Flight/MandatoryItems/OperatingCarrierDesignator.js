import Item from "../../Item";

class ToCityAirportCode extends Item {
    constructor(provider) {
        super(42, 'Operating carrier Designator', provider.getData(3), 3);
    }
}

export default ToCityAirportCode;