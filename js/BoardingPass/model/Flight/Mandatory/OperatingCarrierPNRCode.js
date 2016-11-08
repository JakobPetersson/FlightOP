import Item from "../../Item";

class OperatingCarrierPNRCode extends Item {
    constructor(data) {
        super(7, 'Operating carrier PNR Code', data, 7);
    }
}

export default OperatingCarrierPNRCode;