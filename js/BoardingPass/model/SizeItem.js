import Item from "./Item";

class SizeItem extends Item {
    constructor(itemNr, name, data) {
        super(itemNr, name, data, 2);

        this.dec = this.dec.bind(this);
        this.hex = this.hex.bind(this);
        this.setDec = this.setDec.bind(this);
    }

    dec() {
        return parseInt(this.data, 16);
    }

    hex() {
        return this.data;
    }

    setDec(newValue) {
        this.updateData(newValue.toString(16).padStart(2, '0').toUpperCase());
    }
}

export default SizeItem;