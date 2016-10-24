import Item from "./Item";

class ConditionalItem extends Item {
    constructor(name, data, length) {
        super(name, data, length);

        this.enabled = this.data.length > 0;
    };

}

export default ConditionalItem;