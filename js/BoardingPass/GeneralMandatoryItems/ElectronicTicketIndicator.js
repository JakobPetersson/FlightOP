import Item from "../Item";

class ElectronicTicketIndicator extends Item {
    constructor(provider) {
        super('Electronic Ticket Indicator', provider.getData(1), 1);
    }
}

export default ElectronicTicketIndicator;