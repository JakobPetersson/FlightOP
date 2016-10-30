import Item from "../Item";

class NumberOfLegsEncoded extends Item {
    constructor(provider) {
        super(5, 'Number of Legs Encoded', provider.getData(1), 1);
    }
}

export default NumberOfLegsEncoded;