import ConditionalItem from "./ConditionalItem";

class SecuritySector {
    constructor(consumer) {
        this.isPresent = !!consumer.hasData(4);
        this.securityItems = [];

        if (!this.isPresent) {
            return;
        }

        this.securityItems.push(new ConditionalItem('Beginning of Security Data', consumer.getData(1), 1));
        this.securityItems.push(new ConditionalItem('Type of Security Data', consumer.getData(1), 1));

        this.securityDataSizeHex = consumer.getData(2);
        this.securityItems.push(new ConditionalItem('Length of Security Data', this.securityDataSizeHex, 2));
        this.securityDataSizeDec = parseInt(this.securityDataSizeHex, 16);

        if (!consumer.hasData(this.securityDataSizeDec)) {
            console.log(new Error("Not enough data for security data"));
        }

        this.securityItems.push(new ConditionalItem('Security Data', consumer.getData(this.securityDataSizeDec), this.securityDataSizeDec));
    }

}

export default SecuritySector;