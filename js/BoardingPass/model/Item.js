class Item {
    constructor(itemNr, name, data, itemLength) {
        this._errorDescription = undefined;

        this.itemNr = itemNr;
        this.name = name;
        this.data = data;

        this._enabled = (data.length != 0);

        if (this._enabled && data.length != itemLength) {
            this._errorDescription = 'Expected ' + itemLength + ' characters, got ' + data.length + '.';
        }
        this._length = itemLength;

        this.maxLength = this.maxLength.bind(this);
        this.enabled = this.enabled.bind(this);
        this.errorDescription = this.errorDescription.bind(this);
        this.updateData = this.updateData.bind(this);
        this.build = this.build.bind(this);
    }

    maxLength() {
        return this._length;
    }

    enabled() {
        return this._enabled;
    }

    errorDescription() {
        return this._errorDescription;
    }

    updateData(newData) {
        this.data = newData;
    }

    build() {
        return this.data.padEnd(this._length, ' ').substr(0, this._length);
    }

}

export default Item;