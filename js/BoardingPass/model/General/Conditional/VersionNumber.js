import Item from "../../Item";

class VersionNumber extends Item {
    constructor(data) {
        super(9, 'Version Number', data, 1);
    }
}

export default VersionNumber;