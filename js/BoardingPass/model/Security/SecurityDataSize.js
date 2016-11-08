import SizeItem from "../SizeItem";

class SecurityDataSize extends SizeItem {
    constructor(data) {
        super(29, 'Length of Security Data', data);
    }
}

export default SecurityDataSize;