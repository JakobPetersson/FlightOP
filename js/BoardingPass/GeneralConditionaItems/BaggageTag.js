import Item from "../Item";

class BaggageTag extends Item {
    constructor(provider) {
        super(23, 'Baggage Tag Licence Plate Number(s)', provider.getData(13), 13);
    }
}

export default BaggageTag;