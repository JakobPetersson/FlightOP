import Item from "../Item";

class TypeOfSecurityData extends Item {
    constructor(provider) {
        super(28, 'Type of Security Data', provider.getData(1), 1);
    }
}

export default TypeOfSecurityData;