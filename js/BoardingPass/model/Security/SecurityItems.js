class SecurityItems {
    constructor(beginningOfSecurityData,
                typeOfSecurityData,
                lengthOfSecurityData,
                securityData) {
        this._beginningOfSecurityData = beginningOfSecurityData;
        this._typeOfSecurityData      = typeOfSecurityData;
        this._lengthOfSecurityData    = lengthOfSecurityData;
        this._securityData            = securityData;

        this._enabled = this._beginningOfSecurityData.enabled();

        this.isEnabled = this.isEnabled.bind(this);
        this.setEnabled = this.setEnabled.bind(this);

        this.beginningOfSecurityData = this.beginningOfSecurityData.bind(this);
        this.typeOfSecurityData = this.typeOfSecurityData.bind(this);
        this.lengthOfSecurityData = this.lengthOfSecurityData.bind(this);
        this.securityData = this.securityData.bind(this);

        this.build = this.build.bind(this);
    }

    isEnabled() {
        return this._enabled;
    }

    setEnabled(enabled) {
        this._enabled = enabled;
    }

    beginningOfSecurityData() {
        return this._beginningOfSecurityData;
    }

    typeOfSecurityData() {
        return this._typeOfSecurityData;
    }

    lengthOfSecurityData() {
        return this._lengthOfSecurityData;
    }

    securityData() {
        return this._securityData;
    }

    build() {
        if (!this._enabled) {
            return '';
        }

        let optional = this._securityData.build();
        this._lengthOfSecurityData.setDec(optional.length);

        return this._beginningOfSecurityData.build() +
            this._typeOfSecurityData.build() +
            this._lengthOfSecurityData.build() +
            optional;
    }

}

export default SecurityItems;