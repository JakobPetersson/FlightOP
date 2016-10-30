import Item from "../../Item";

class SecondNonConsecutiveBaggageTag extends Item {
    constructor(provider) {
        super(32, '2nd Non-Consecutive Baggage Tag Licence Plate Number', provider.getData(13), 13);
    }
}

export default SecondNonConsecutiveBaggageTag;