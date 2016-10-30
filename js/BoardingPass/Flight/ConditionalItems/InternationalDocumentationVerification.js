import Item from "../../Item";

class InternationalDocumentationVerification extends Item {
    constructor(provider) {
        super(108, 'International Documentation Verification', provider.getData(1), 1);
    }
}

export default InternationalDocumentationVerification;