class Item {
    constructor(itemNr, name, data, length) {
        this.itemNr = itemNr;
        this.name = name;
        this.data = data;
        this.length = length;

        this.updateData = this.updateData.bind(this);
        this.build = this.build.bind(this);
    }

    updateData(newData) {
        this.data = newData;
    }

    build() {
        return this.data.padEnd(this.length, ' ').substr(0, this.length);
    }

}

export default Item;