import Item from "../../Item";

class FrequentFlyerAirlineDesignator extends Item {
    constructor(provider) {
        super(20, 'Frequent Flyer Airline Designator', provider.getData(3), 3);
    }
}

export default FrequentFlyerAirlineDesignator;