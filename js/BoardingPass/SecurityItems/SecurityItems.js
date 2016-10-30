import Item from "../Item";

class SecurityItems {
    constructor(provider) {
        this.isPresent = provider.hasData(4);
        this.securityItems = [];

        if (!this.isPresent) {
            return;
        }

        this.securityItems.push(new Item(25, 'Beginning of Security Data', provider.getData(1), 1));
        this.securityItems.push(new Item(28, 'Type of Security Data', provider.getData(1), 1));

        this.securityDataSizeHex = provider.getData(2);
        this.securityItems.push(new Item(29, 'Length of Security Data', this.securityDataSizeHex, 2));
        this.securityDataSizeDec = parseInt(this.securityDataSizeHex, 16);

        if (!provider.hasData(this.securityDataSizeDec)) {
            console.log(new Error("Not enough data for security data"));
        }

        this.securityItems.push(new Item(30, 'Security Data', provider.getData(this.securityDataSizeDec), this.securityDataSizeDec));
    }

}

export default SecurityItems;