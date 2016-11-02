import SizeItem from "../SizeItem";

class SecurityDataSize extends SizeItem {
    constructor(provider) {
        super(29, 'Length of Security Data', provider.getData(2));
    }
}

export default SecurityDataSize;