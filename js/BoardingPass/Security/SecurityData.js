import VariableLengthItem from "../VariableLengthItem";

class SecurityData extends VariableLengthItem {
    constructor(provider, size) {
        super(30, 'Security Data', provider.getData(size), size);
    }
}

export default SecurityData;