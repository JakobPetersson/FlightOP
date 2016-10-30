import Item from "../../Item";

class SeatNumber extends Item {
    constructor(provider) {
        super(104, 'Seat Number', provider.getData(4), 4);
    }
}

export default SeatNumber;