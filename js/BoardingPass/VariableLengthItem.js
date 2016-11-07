import Item from "./Item";

class VariableLengthItem extends Item {
    constructor(itemNr, name, data, itemLength) {
        super(itemNr, name, data, itemLength);

        this.build = this.build.bind(this);
    }

    build() {
        return this.data;
    }

}

export default VariableLengthItem;