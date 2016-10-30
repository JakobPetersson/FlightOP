import Item from "../Item";

class BeginningOfSecurityData extends Item {
    constructor(provider) {
        super(25, 'Beginning of Security Data', provider.getData(1), 1);
    }
}

export default BeginningOfSecurityData;