import Item from "./Item";

class ConditionalItem extends Item {
    constructor(itemNr, name, data, length) {
        super(itemNr, name, data, length);

        this.enabled = this.data.length > 0;
    };

}

export default ConditionalItem;