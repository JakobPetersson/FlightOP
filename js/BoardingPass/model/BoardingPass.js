import BoardingPassBuilder from "./BoardingPassBuilder";

class BoardingPass {
    constructor(rawData,
                mandatoryItems,
                conditionalItems,
                flights,
                securityItems) {
        this._rawData = rawData;
        this._mandatoryItems = mandatoryItems;
        this._conditionalItems = conditionalItems;
        this._flights = flights;
        this._securityItems = securityItems;

        this.rawData = this.rawData.bind(this);
        this.mandatoryItems = this.mandatoryItems.bind(this);
        this.conditionalItems = this.conditionalItems.bind(this);
        this.flights = this.flights.bind(this);
        this.securityItems = this.securityItems.bind(this);
        this.build = this.build.bind(this);
    }

    rawData() {
        return this._rawData;
    }

    mandatoryItems() {
        return this._mandatoryItems;
    }

    conditionalItems() {
        return this._conditionalItems;
    }

    flights() {
        return this._flights;
    }

    securityItems() {
        return this._securityItems;
    }

    build() {
        console.log("BoardingPass.build()");
        return BoardingPassBuilder.build(
            this._flights[0].build() +
            this._securityItems.build()
        );
    }
}

export default BoardingPass;