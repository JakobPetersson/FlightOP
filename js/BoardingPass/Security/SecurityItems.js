import BeginningOfSecurityData from "./BeginningOfSecurityData";
import TypeOfSecurityData from "./TypeOfSecurityData";
import SecurityDataSize from "./SecurityDataSize";
import SecurityData from "./SecurityData";

class SecurityItems {
    constructor(provider) {
        this._enabled = provider.hasData(1);

        this.beginningOfSecurityData = new BeginningOfSecurityData(provider);
        this.typeOfSecurityData      = new TypeOfSecurityData(provider);

        this.lengthOfSecurityData    = new SecurityDataSize(provider);

        if (!provider.hasData(this.lengthOfSecurityData.dec())) {
            console.log(new Error("Not enough data for SecurityItems"));
        }

        this.securityData            = new SecurityData(provider, this.lengthOfSecurityData.dec());

        this.isEnabled = this.isEnabled.bind(this);
        this.setEnabled = this.setEnabled.bind(this);

        this.build = this.build.bind(this);
    }

    isEnabled() {
        return this._enabled;
    }

    setEnabled(enabled) {
        this._enabled = enabled;
    }

    build() {
        if (!this._enabled) {
            return '';
        }

        let optional = this.securityData.build();
        this.lengthOfSecurityData.setDec(optional.length);

        return this.beginningOfSecurityData.build() +
            this.typeOfSecurityData.build() +
            this.lengthOfSecurityData.build() +
            optional;
    }

}

export default SecurityItems;