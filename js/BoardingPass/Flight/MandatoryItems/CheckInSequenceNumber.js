import Item from "../../Item";

class CheckInSequenceNumber extends Item {
    constructor(provider) {
        super(107, 'Check-In Sequence Number', provider.getData(5), 5);
    }
}

export default CheckInSequenceNumber;