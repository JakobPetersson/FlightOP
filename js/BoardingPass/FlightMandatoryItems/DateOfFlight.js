import Item from "../Item";

class DateOfFlight extends Item {
    constructor(provider) {
        super(46, 'Date of Flight', provider.getData(3), 3);
    }
}

export default DateOfFlight;