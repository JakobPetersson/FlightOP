import BeginningOfSecurityData from "./BeginningOfSecurityData";
import TypeOfSecurityData from "./TypeOfSecurityData";
import SecurityDataSize from "./SecurityDataSize";
import SecurityData from "./SecurityData";
import SecurityItems from "./SecurityItems";

class SecurityItemsBuilder {
    static build(provider) {
        const beginningOfSecurityData = new BeginningOfSecurityData(provider.getData(1));
        const typeOfSecurityData = new TypeOfSecurityData(provider.getData(1));
        const lengthOfSecurityData = new SecurityDataSize(provider.getData(2));

        if (!provider.hasData(lengthOfSecurityData.dec())) {
            console.log(new Error("Not enough data for SecurityItems"));
        }

        const securityData = new SecurityData(provider.getData(lengthOfSecurityData.dec()), lengthOfSecurityData.dec());

        return new SecurityItems(
            beginningOfSecurityData,
            typeOfSecurityData,
            lengthOfSecurityData,
            securityData
        );
    }
}

export default SecurityItemsBuilder;