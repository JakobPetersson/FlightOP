import SizeItem from "../../SizeItem";

class AllConditionalSize extends SizeItem {
    constructor(provider) {
        super(6, 'Size of variable size field', provider.getData(2));
    }
}

export default AllConditionalSize;