import Item from "../../Item";

class BeginningOfVersionNumber extends Item {
    constructor(provider) {
        super(8, 'Beginning of version number', provider.getData(1), 1);
    }
}

export default BeginningOfVersionNumber;