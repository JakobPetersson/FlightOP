import FormatCode from "./Mandatory/FormatCode";
import NumberOfLegsEncoded from "./Mandatory/NumberOfLegsEncoded";
import PassengerName from "./Mandatory/PassengerName";
import ElectronicTicketIndicator from "./Mandatory/ElectronicTicketIndicator";
import GeneralMandatoryItems from "./GeneralMandatoryItems";

class GeneralMandatoryItemsBuilder {
    static build(provider) {
        if (!provider.hasData(23)) {
            console.log(new Error("Not enough data for GeneralMandatoryItems"));
        }

        const formatCode                 = new FormatCode(provider.getData(1));
        const numberOfLegsEncoded        = new NumberOfLegsEncoded(provider.getData(1));
        const passengerName              = new PassengerName(provider.getData(20));
        const electronicTicketIndicator  = new ElectronicTicketIndicator(provider.getData(1));

        return new GeneralMandatoryItems(
            formatCode,
            numberOfLegsEncoded,
            passengerName,
            electronicTicketIndicator
        );
    }
}

export default GeneralMandatoryItemsBuilder;