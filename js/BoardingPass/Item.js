class Item {
    constructor(itemNr, name, data, itemLength) {
        this.itemNr = itemNr;
        this.name = name;
        this.data = data;
        this.length = itemLength;

        this._error = (data.length != itemLength);

        this.enabled = (data.length > 0);

        this.hasError = this.hasError.bind(this);

        this.updateData = this.updateData.bind(this);
        this.build = this.build.bind(this);
    }

    hasError() {
        return this._error;
    }

    updateData(newData) {
        this.data = newData;
    }

    build() {
        return this.data.padEnd(this.length, ' ').substr(0, this.length);
    }

}

export default Item;