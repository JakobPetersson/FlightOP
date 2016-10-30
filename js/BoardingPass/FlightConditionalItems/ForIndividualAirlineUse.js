import Item from "../Item";

class ForIndividualAirlineUse extends Item {
    constructor(provider, size) {
        super(4, 'For individual airline use', provider.getData(size), size);
    }
}

export default ForIndividualAirlineUse;