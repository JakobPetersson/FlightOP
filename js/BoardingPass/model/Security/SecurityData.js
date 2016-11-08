import VariableLengthItem from "../VariableLengthItem";

class SecurityData extends VariableLengthItem {
    constructor(data, size) {
        super(30, 'Security Data', data, size);
    }
}

export default SecurityData;