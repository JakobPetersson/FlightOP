import VariableLengthItem from "../../VariableLengthItem";

class ForIndividualAirlineUse extends VariableLengthItem {
    constructor(provider, size) {
        super(4, 'For individual airline use', provider.getData(size), size);
    }
}

export default ForIndividualAirlineUse;