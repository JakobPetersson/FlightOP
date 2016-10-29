import Item from "../Item";

class FormatCode extends Item {
    constructor(provider) {
        super('Format Code', provider.getData(1), 1);
    }
}

export default FormatCode;