import Item from "../Item";
import BeginningOfSecurityData from "./BeginningOfSecurityData";
import TypeOfSecurityData from "./TypeOfSecurityData";
import SecurityData from "./SecurityData";

class SecurityItems {
    constructor(provider) {
        this.beginningOfSecurityData = new BeginningOfSecurityData(provider);
        this.typeOfSecurityData      = new TypeOfSecurityData(provider);

        this.sizeHex = provider.getData(2);
        this.sizeDec = parseInt(this.sizeHex, 16);
        this.lengthOfSecurityData    = new Item(29, 'Length of Security Data', this.sizeHex, 2);

        if (!provider.hasData(this.sizeDec)) {
            console.log(new Error("Not enough data for SecurityItems"));
        }

        this.securityData            = new SecurityData(provider, this.sizeDec);
    }

}

export default SecurityItems;