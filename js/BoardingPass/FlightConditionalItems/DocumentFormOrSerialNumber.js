import Item from "../Item";

class DocumentFormOrSerialNumber extends Item {
    constructor(provider) {
        super(143, 'Document Form/Serial Number', provider.getData(10), 10);
    }
}

export default DocumentFormOrSerialNumber;