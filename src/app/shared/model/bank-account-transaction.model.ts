import { Observable } from 'rxjs/Observable';
import { UUID } from 'angular2-uuid';
import * as moment from 'moment';
import { BankAccount } from './bank-account.model';


export class BankAccountTransaction {
    uuid: string;
    bankAccount: BankAccount;
    reference: string;
    type: string;
    amount: number;
    note: string;
    createdAt: string;
    updatedAt: string;

    initialize() {
        if (!this.uuid) {
            this.uuid = UUID.UUID();
            this.bankAccount = null;
            this.reference = '';
            this.type = '';
            this.amount = 0;
            this.note = '';
            const timestamp = moment();
            this.createdAt = timestamp.format();
            this.updatedAt = timestamp.format();
        }
    }

    fromJson(jsonData) {
        if (jsonData) {
            const bankAccount = new BankAccount();
            this.uuid = jsonData.uuid ? jsonData.uuid : '';
            this.bankAccount = bankAccount.fromJson(jsonData.bankAccount);
            this.reference = jsonData.reference ? jsonData.reference : '';
            this.type = jsonData.type ? jsonData.type : '';
            this.amount = jsonData.amount ? jsonData.amount : 0;
            this.note = jsonData.note ? jsonData.note : '';
            this.createdAt = jsonData.createdAt ? jsonData.createdAt : '';
            this.updatedAt = jsonData.updatedAt ? jsonData.updatedAt : '';
        }
        return this;
    }
}
