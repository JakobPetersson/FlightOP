import Item from "../Item";

class SecurityData extends Item {
    constructor(provider, size) {
        super(30, 'Security Data', provider.getData(size), 255);
    }
}

export default SecurityData;