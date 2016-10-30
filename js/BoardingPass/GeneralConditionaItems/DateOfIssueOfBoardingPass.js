import Item from "../Item";

class DateOfIssueOfBoardingPass extends Item {
    constructor(provider) {
        super(22, 'Source of Boarding Pass Issuance', provider.getData(4), 4);
    }
}

export default DateOfIssueOfBoardingPass;