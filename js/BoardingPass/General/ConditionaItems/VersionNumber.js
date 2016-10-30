import Item from "../../Item";

class VersionNumber extends Item {
    constructor(provider) {
        super(9, 'Version Number', provider.getData(1), 1);
    }
}

export default VersionNumber;