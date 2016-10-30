import Item from "../../Item";

class DocumentType extends Item {
    constructor(provider) {
        super(16, 'Document Type', provider.getData(1), 1);
    }
}

export default DocumentType;