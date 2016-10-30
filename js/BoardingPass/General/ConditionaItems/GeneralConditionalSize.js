import SizeItem from "../../SizeItem";

class GeneralConditionalSize extends SizeItem {
    constructor(provider) {
        super(10, 'Size of conditional items', provider.getData(2));
    }
}

export default GeneralConditionalSize;