import Item from "../../Item";

class PassengerDescription extends Item {
    constructor(provider) {
        super(15, 'Passenger Description', provider.getData(1), 1);
    }
}

export default PassengerDescription;