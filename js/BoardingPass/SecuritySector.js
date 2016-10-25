import ConditionalItem from "./ConditionalItem";

class SecuritySector {
    constructor(provider) {
        this.isPresent = !!provider.hasData(4);
        this.securityItems = [];

        if (!this.isPresent) {
            return;
        }

        this.securityItems.push(new ConditionalItem('Beginning of Security Data', provider.getData(1), 1));
        this.securityItems.push(new ConditionalItem('Type of Security Data', provider.getData(1), 1));

        this.securityDataSizeHex = provider.getData(2);
        this.securityItems.push(new ConditionalItem('Length of Security Data', this.securityDataSizeHex, 2));
        this.securityDataSizeDec = parseInt(this.securityDataSizeHex, 16);

        if (!provider.hasData(this.securityDataSizeDec)) {
            console.log(new Error("Not enough data for security data"));
        }

        this.securityItems.push(new ConditionalItem('Security Data', provider.getData(this.securityDataSizeDec), this.securityDataSizeDec));
    }

}

export default SecuritySector;