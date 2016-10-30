import Item from "../Item";

class FastTrack extends Item {
    constructor(provider) {
        super(254, 'Fast Track', provider.getData(1), 1);
    }
}

export default FastTrack;