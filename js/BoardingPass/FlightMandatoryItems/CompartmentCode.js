import Item from "../Item";

class CompartmentCode extends Item {
    constructor(provider) {
        super(71, 'Compartment Code', provider.getData(1), 1);
    }
}

export default CompartmentCode;