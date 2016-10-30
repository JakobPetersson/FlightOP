import Item from "../../Item";

class PassengerName extends Item {
    constructor(provider) {
        super(11, 'Passenger Name', provider.getData(20), 20);
    }
}

export default PassengerName;