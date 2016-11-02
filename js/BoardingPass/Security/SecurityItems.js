import BeginningOfSecurityData from "./BeginningOfSecurityData";
import TypeOfSecurityData from "./TypeOfSecurityData";
import SecurityDataSize from "./SecurityDataSize";
import SecurityData from "./SecurityData";

class SecurityItems {
    constructor(provider) {
        this.beginningOfSecurityData = new BeginningOfSecurityData(provider);
        this.typeOfSecurityData      = new TypeOfSecurityData(provider);

        this.lengthOfSecurityData    = new SecurityDataSize(provider);

        if (!provider.hasData(this.lengthOfSecurityData.dec())) {
            console.log(new Error("Not enough data for SecurityItems"));
        }

        this.securityData            = new SecurityData(provider, this.lengthOfSecurityData.dec());

        this.build = this.build.bind(this);
    }

    build() {
        console.log("SecurityItems.build()");

        let optional = this.securityData.build();

        this.lengthOfSecurityData.setDec(optional.length);

        return this.beginningOfSecurityData.build() +
            this.typeOfSecurityData.build() +
            this.lengthOfSecurityData.build() +
            optional;
    }

}

export default SecurityItems;