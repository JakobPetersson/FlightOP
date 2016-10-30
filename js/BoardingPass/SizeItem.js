import Item from "./Item";

class SizeItem extends Item {
    constructor(itemNr, name, data) {
        super(itemNr, name, data, 2);

        this.dec = this.dec.bind(this);
        this.hex = this.hex.bind(this);
    }

    dec() {
        return parseInt(this.data, 16);
    }

    hex() {
        return this.data;
    }
}

export default SizeItem;