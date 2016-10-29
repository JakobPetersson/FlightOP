import Item from "../Item";

class NumberOfLegsEncoded extends Item {
    constructor(provider) {
        super('Number of Legs Encoded', provider.getData(1), 1);
    }
}

export default NumberOfLegsEncoded;