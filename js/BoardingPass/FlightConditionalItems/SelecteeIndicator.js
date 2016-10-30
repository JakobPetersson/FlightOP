import Item from "../Item";

class SelecteeIndicator extends Item {
    constructor(provider) {
        super(18, 'Selectee indicator', provider.getData(1), 1);
    }
}

export default SelecteeIndicator;