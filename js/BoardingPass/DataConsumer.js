class DataConsumer {
    constructor(string) {
        this.data = string;

        this.peek = this.peek.bind(this);
        this.hasData = this.hasData.bind(this);
        this.getData = this.getData.bind(this);
        this.getRemainingData = this.getRemainingData.bind(this);
    }

    peek(length) {
        return this.data.substring(0, length);
    }

    hasData(length) {
        if (length > this.data.length) {
            console.log(new Error("DataConsumer, does not have data (" + length + " of " + this.data.length + ")"));
        }
        return this.data.length >= length;
    }

    getData(length) {
        this.hasData(length);
        let res = this.data.substring(0, length);
        this.data = this.data.substring(length);
        return res;
    }

    getRemainingData() {
        return this.getData(this.data.length);
    }
}

export default DataConsumer;