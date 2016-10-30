import Item from "../../Item";

class FormatCode extends Item {
    constructor(provider) {
        super(1, 'Format Code', provider.getData(1), 1);
    }
}

export default FormatCode;