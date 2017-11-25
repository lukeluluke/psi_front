import * as moment from 'moment';
import {UUID} from 'angular2-uuid';

export class Warehouse {
    uuid: string;
    name: string;
    addressLine1: string;
    addressLine2: string;
    suburb: string;
    postcode: number;
    stateId: number;
    countryId: number;
    contactPerson: string;
    contactPhone: string;
    note: string;
    createdAt: string;
    updatedAt: string;

    initialize() {
        if (!this.uuid) {
            const timestamp = moment();
            this.uuid = UUID.UUID();
            this.createdAt = timestamp.format();
            this.updatedAt = timestamp.format();
        }
    }

    fromJson(jsonData) {
        if (jsonData) {
            this.uuid = jsonData.uuid ? jsonData.uuid : '';
            this.name = jsonData.name ? jsonData.name : '';
            this.addressLine1 = jsonData.addressLine1 ? jsonData.addressLine1 : '';
            this.addressLine2 = jsonData.addressLine2 ? jsonData.addressLine2 : '';
            this.suburb = jsonData.suburb ? jsonData.suburb : '';
            this.postcode = jsonData.postcode ? jsonData.postcode : '';
            this.stateId = jsonData.stateId ? jsonData.stateId : '';
            this.countryId = jsonData.countryId ? jsonData.countryId : '';
            this.contactPerson = jsonData.contactPerson ? jsonData.contactPerson : '';
            this.contactPhone = jsonData.contactPhone ? jsonData.contactPhone : '';
            this.createdAt = jsonData.createdAt ? jsonData.createdAt : '';
            this.updatedAt = jsonData.updatedAt ? jsonData.updatedAt : '';
        }
        return this;
    }
}
