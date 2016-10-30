import Item from "../Item";

class MarketingCarrierDesignator extends Item {
    constructor(provider) {
        super(19, 'Marketing carrier designator', provider.getData(3), 3);
    }
}

export default MarketingCarrierDesignator;