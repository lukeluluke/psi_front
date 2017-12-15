import {Observable} from 'rxjs/Observable';
import * as moment from 'moment';
import {UUID} from 'angular2-uuid';
import {States} from './config.model';

export class BankAccount {
    uuid: string;
    name: string;
    balance: number;
    description: string;
    createdAt: string;
    updatedAt: string;

    initialize() {
        if (!this.uuid) {
            const timestamp = moment();
            this.uuid = UUID.UUID();
            this.balance = 0;
            this.description = '';
            this.createdAt = timestamp.format();
            this.updatedAt = timestamp.format();
        }
    }

    fromJson(jsonData) {
        if (jsonData) {
            this.uuid = jsonData.uuid ? jsonData.uuid : '';
            this.name = jsonData.name ? jsonData.name : '';
            this.balance = jsonData.balance ? jsonData.balance : 0;
            this.description = jsonData.description ? jsonData.description : '';
            this.createdAt = jsonData.createdAt ? jsonData.createdAt : '';
            this.updatedAt = jsonData.updatedAt ? jsonData.updatedAt : '';
        }
        return this;
    }
}


