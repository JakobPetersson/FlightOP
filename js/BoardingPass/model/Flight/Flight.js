class Flight {
    constructor(id,
                mandatoryItems,
                conditionalItems,
                generalMandatoryItems,
                generalConditionalItems) {
        this._id = id;
        this._mandatoryItems = mandatoryItems;
        this._conditionalItems = conditionalItems;
        this._generalMandatoryItems = generalMandatoryItems;
        this._generalConditionalItems = generalConditionalItems;

        this.mandatoryItems = this.mandatoryItems.bind(this);
        this.conditionalItems = this.conditionalItems.bind(this);
        this.generalMandatoryItems = this.generalMandatoryItems.bind(this);
        this.generalConditionalItems = this.generalConditionalItems.bind(this);
    }

    id() {
        return this._id;
    }

    mandatoryItems() {
        return this._mandatoryItems;
    }

    conditionalItems() {
        return this._conditionalItems;
    }

    generalMandatoryItems() {
        return this._generalMandatoryItems;
    }

    generalConditionalItems() {
        return this._generalConditionalItems;
    }

    build() {
        let optional = this._conditionalItems.build();
        if (this._generalConditionalItems) {
            optional = this._generalConditionalItems.build() + optional;
        }

        this._mandatoryItems.allConditionalSize().setDec(optional.length);

        let result = this._mandatoryItems.build() + optional;
        if (this._generalMandatoryItems) {
            result = this._generalMandatoryItems.build() + result;
        }

        return result;
    }
}

export default Flight;