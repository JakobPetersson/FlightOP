import Item from "../../Item";

class FreeBaggageAllowance extends Item {
    constructor(provider) {
        super(118, 'Free Baggage Allowance', provider.getData(3), 3);
    }
}

export default FreeBaggageAllowance;