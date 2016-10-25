import DataConsumer from "./DataConsumer";
import Item from "./Item";
import ConditionalItem from "./ConditionalItem";
import GeneralMandatoryItems from "./GeneralMandatoryItems";
import FlightMandatoryItems from "./FlightMandatoryItems";

class Flight {
    constructor(consumer, id) {
        this.id = id;
        this.isFirstFlight = (this.id == 1);

        this.generalItems = [];

        /*
         * Mandatory fields
         */

        if (this.isFirstFlight) {
            this.generalMandatoryItems = new GeneralMandatoryItems(consumer);
        }
        this.mandatoryItems = new FlightMandatoryItems(consumer);

        /*
         * Conditional fields
         */
        this.conditionalSizeHex = consumer.getData(2);
        this.generalItems.push(new Item('Size of variable size field', this.conditionalSizeHex, 2));
        this.conditionalSizeDec = parseInt(this.conditionalSizeHex, 16);

        this.hasConditionalItems = this.conditionalSizeDec != 0;
        if (!this.hasConditionalItems) {
            return;
        }

        if (this.isFirstFlight) {
            /*
             * Conditional fields unique for first flight on boarding pass
             */
            this.generalItems.push(new ConditionalItem('Beginning of version number', consumer.getData(1), 1));
            this.generalItems.push(new ConditionalItem('Version Number', consumer.getData(1), 1));

            this.conditionalUniqueSizeHex = consumer.getData(2);
            this.generalItems.push(new ConditionalItem('Size of conditional items', this.conditionalUniqueSizeHex, 2));
            this.conditionalUniqueSizeDec = parseInt(this.conditionalUniqueSizeHex, 16);

            if (!consumer.hasData(this.conditionalUniqueSizeDec)) {
                console.log(new Error("Flight, Not enough data for unique conditional items"));
            }

            this._initUniqueConditionalFields(consumer.getData(this.conditionalUniqueSizeDec));
        }

        /*
         * Conditional fields for all flights on boarding pass
         */
        this.conditionalRepeatedSizeHex = consumer.getData(2);
        this.sizeOfConditionalItems = new ConditionalItem('Size of conditional items', this.conditionalRepeatedSizeHex, 2);
        this.conditionalRepeatedSizeDec = parseInt(this.conditionalRepeatedSizeHex, 16);

        if (consumer.hasData(this.conditionalRepeatedSizeDec)) {
            console.log(new Error("Not enough data for Flight repeated conditional items"));
        }

        this._initRepeatedConditionalFields(consumer.getData(this.conditionalRepeatedSizeDec));

        let individualSize = this.conditionalSizeDec - 2 - this.conditionalRepeatedSizeDec - 2;
        if (this.isFirstFlight) {
            individualSize = individualSize - this.conditionalUniqueSizeDec - 2;
        }
        this.forIndividualAirlineUse = new ConditionalItem('For individual airline use', consumer.getData(individualSize), individualSize)
    }

    _initUniqueConditionalFields(rawData) {
        let data = new DataConsumer(rawData);
        this.generalItems.push(new Item('Passenger Description', data.getData(1), 1));
        this.generalItems.push(new Item('Source of check-in', data.getData(1), 1));
        this.generalItems.push(new Item('Source of Boarding Pass Issuance', data.getData(1), 1));
        this.generalItems.push(new Item('Date of Issue of Boarding Pass', data.getData(4), 4));
        this.generalItems.push(new Item('Document Type', data.getData(1), 4));
        this.generalItems.push(new Item('Airline Designator of boarding pass issuer', data.getData(3), 3));
        this.generalItems.push(new Item('Baggage Tag Licence Plate Number(s)', data.getData(13), 13));
        this.generalItems.push(new Item('1st Non-Consecutive Baggage Tag Licence Plate Number', data.getData(13), 13));
        this.generalItems.push(new Item('2nd Non-Consecutive Baggage Tag Licence Plate Number', data.getData(13), 13));
    }

    _initRepeatedConditionalFields(rawData) {
        let data = new DataConsumer(rawData);
        this.airlineNumericCode = new ConditionalItem('Airline Numeric Code', data.getData(3), 3);
        this.documentFormOrSerialNumber = new ConditionalItem('Document Form/Serial Number', data.getData(10), 10);
        this.selecteeIndicator = new ConditionalItem('Selectee indicator', data.getData(1), 1);
        this.internationalDocumentationVerification = new ConditionalItem('International Documentation Verification', data.getData(1), 1);
        this.marketingCarrierDesignator = new ConditionalItem('Marketing carrier designator', data.getData(3), 3);
        this.frequentFlyerAirlineDesignator = new ConditionalItem('Frequent Flyer Airline Designator', data.getData(3), 3);
        this.frequentFlyerNumber = new ConditionalItem('Frequent Flyer Number', data.getData(16), 16);
        this.idOrAdIndicator = new ConditionalItem('ID/AD Indicator', data.getData(1), 1);
        this.freeBaggageAllowance = new ConditionalItem('Free Baggage Allowance', data.getData(3), 3);
        this.fastTrack = new ConditionalItem('Fast Track', data.getData(1), 1);
    }
}

export default Flight;