import VariableLengthItem from "../../VariableLengthItem";

class ForIndividualAirlineUse extends VariableLengthItem {
    constructor(data, size) {
        super(4, 'For individual airline use', data, size);
    }
}

export default ForIndividualAirlineUse;