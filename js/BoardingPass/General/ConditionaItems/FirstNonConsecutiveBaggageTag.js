import Item from "../../Item";

class FirstNonConsecutiveBaggageTag extends Item {
    constructor(provider) {
        super(31, '1st Non-Consecutive Baggage Tag Licence Plate Number', provider.getData(13), 13);
    }
}

export default FirstNonConsecutiveBaggageTag;