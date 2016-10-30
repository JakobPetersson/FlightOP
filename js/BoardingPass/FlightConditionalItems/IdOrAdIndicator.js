import Item from "../Item";

class IdOrAdIndicator extends Item {
    constructor(provider) {
        super(89, 'ID/AD Indicator', provider.getData(1), 1);
    }
}

export default IdOrAdIndicator;