import Item from "../Item";

class FrequentFlyerNumber extends Item {
    constructor(provider) {
        super(236, 'Frequent Flyer Number', provider.getData(16), 16);
    }
}

export default FrequentFlyerNumber;