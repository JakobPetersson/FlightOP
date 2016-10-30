import Item from "../../Item";

class DateOfIssueOfBoardingPass extends Item {
    constructor(provider) {
        super(22, 'Date of Issue of Boarding Pass', provider.getData(4), 4);
    }
}

export default DateOfIssueOfBoardingPass;