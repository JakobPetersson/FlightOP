import Item from "../Item";

class PassengerStatus extends Item {
    constructor(provider) {
        super(113, 'Passenger Status', provider.getData(1), 1);
    }
}

export default PassengerStatus;