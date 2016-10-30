import Item from "../../Item";

class OperatingCarrierPNRCode extends Item {
    constructor(provider) {
        super(7, 'Operating carrier PNR Code', provider.getData(7), 7);
    }
}

export default OperatingCarrierPNRCode;