import Item from "../../Item";

class SourceOfBoardingPassIssuance extends Item {
    constructor(provider) {
        super(14, 'Source of Boarding Pass Issuance', provider.getData(1), 1);
    }
}

export default SourceOfBoardingPassIssuance;