class Item {
    constructor(itemNr, name, data, itemLength) {
        this._errorDescription = undefined;

        this.itemNr = itemNr;
        this.name = name;
        this.data = data;

        if (data.length != itemLength) {
            this._errorDescription = 'Expected ' + itemLength + ' characters, got ' + data.length + '.';
        }
        this.length = itemLength;

        this.enabled = (data.length > 0);

        this.errorDescription = this.errorDescription.bind(this);

        this.updateData = this.updateData.bind(this);
        this.build = this.build.bind(this);
    }

    errorDescription() {
        return this._errorDescription;
    }

    updateData(newData) {
        this.data = newData;
    }

    build() {
        return this.data.padEnd(this.length, ' ').substr(0, this.length);
    }

}

export default Item;