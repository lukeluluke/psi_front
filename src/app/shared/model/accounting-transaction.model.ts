import {Observable} from 'rxjs/Observable';
import * as moment from 'moment';
import {UUID} from 'angular2-uuid';
import { AccountingTransactionItem } from './accounting-transaction-item.model';
import { User} from './user.model';
import { Company } from './company.model';
import { Division } from './division.model';


export class AccountingTransaction {
    uuid: string;
    id: number;
    type: number; // expenditure or income
    accountingTransactionItems: AccountingTransactionItem[];
    company: Company;
    user: User;
    division: Division;
    description: string;
    extraInfo: string;
    createdAt: string;
    updatedAt: string;
    initialize() {
        if (!this.uuid) {
            const timestamp = moment();
            this.uuid = UUID.UUID();
            this.createdAt = timestamp.format();
            this.accountingTransactionItems = [];
        }
    }

    fromJson(jsonData) {
        if (jsonData) {
            const user = new User();
            const company = new Company();
            const division = new Division();
            this.uuid = jsonData.uuid ? jsonData.uuid : '';
            this.id = jsonData.id ? jsonData.id : '';
            this.type = jsonData.type ? jsonData.type : '';
            this.user = user.fromJson(jsonData.user);
            this.company = company.fromJson(jsonData.company);
            this.division = division.fromJson(jsonData.division);
            this.description = jsonData.description ? jsonData.description : '';
            this.extraInfo = jsonData.extraInfo ? jsonData.exact : '';
            this.createdAt = jsonData.createdAt ? jsonData.createdAt : '';
            this.updatedAt = jsonData.updatedAt ? jsonData.updatedAt : '';
            const accountingTransactionItems = [];
            if (jsonData.accountingTransactionItems && jsonData.accountingTransactionItems.length > 0 ) {
                for (const j of jsonData.accountingTransactionItems) {
                    const journalItem = new AccountingTransactionItem();
                    accountingTransactionItems.push(journalItem.fromJson(j));
                }
            }
            this.accountingTransactionItems = accountingTransactionItems;
        }
        return this;
    }
}
