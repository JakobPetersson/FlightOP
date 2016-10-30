import Item from "../../Item";

class SourceOfCheckIn extends Item {
    constructor(provider) {
        super(12, 'Source of check-in', provider.getData(1), 1);
    }
}

export default SourceOfCheckIn;