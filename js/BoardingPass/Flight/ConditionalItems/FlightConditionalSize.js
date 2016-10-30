import SizeItem from "../../SizeItem";

class FlightConditionalSize extends SizeItem {
    constructor(provider) {
        super(17, 'Size of conditional items', provider.getData(2));
    }
}

export default FlightConditionalSize;