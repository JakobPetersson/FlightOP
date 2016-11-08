import Item from "./Item";

class VariableLengthItem extends Item {
    constructor(itemNr, name, data, itemLength) {
        super(itemNr, name, data, itemLength);

        this.maxLength = this.maxLength.bind(this);
        this.build = this.build.bind(this);
    }

    maxLength() {
        return 255;
    }

    build() {
        return this.data;
    }

}

export default VariableLengthItem;