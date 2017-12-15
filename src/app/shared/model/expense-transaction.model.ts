import {Observable} from 'rxjs/Observable';
import * as moment from 'moment';
import { UUID } from 'angular2-uuid';
import { ExpenseItem } from './expense-item.model';
import { User} from './user.model';
import { Company } from './company.model';
import { Division } from './division.model';
import { BankAccount } from './bank-account.model';


export class ExpenseTransaction {
    static OPEN = 1;
    static CLOSED = 2;
    static DELETED = 3;
    uuid: string;
    status: number; // 0 => open; 1 => closed; 2 => deleted
    expenseItems: ExpenseItem[];
    toWhom: Company;
    byWhom: User;
    division: Division;
    amount: number;
    bankAccount: BankAccount;
    note: string;
    createdAt: string;
    updatedAt: string;
    initialize() {
        if (!this.uuid) {
            this.uuid = UUID.UUID();
            this.status = 0;
            this.expenseItems = [];
            this.toWhom = null;
            this.byWhom = null;
            this.division = null;
            this.amount = 0;
            this.bankAccount = null;
            this.note = '';
            const timestamp = moment();
            this.createdAt = timestamp.format();
            this.updatedAt = timestamp.format();
        }
    }

    fromJson(jsonData) {
        if (jsonData) {
            const user = new User();
            const company = new Company();
            const division = new Division();
            const expenseItems = [];
            const bankAccount = new BankAccount();
            let amount = 0;
            this.uuid = jsonData.uuid ? jsonData.uuid : '';
            this.status = jsonData.status ? jsonData.status : '';
            this.byWhom = user.fromJson(jsonData.byWhom);
            this.toWhom = company.fromJson(jsonData.toWhom);
            this.division = division.fromJson(jsonData.division);
            this.note = jsonData.note ? jsonData.note : '';
            this.createdAt = jsonData.createdAt ? jsonData.createdAt : '';
            this.updatedAt = jsonData.updatedAt ? jsonData.updatedAt : '';
            if (jsonData.expenseItems && jsonData.expenseItems.length > 0 ) {
                for (const ei of jsonData.expenseItems) {
                    const expenseItem = new ExpenseItem();
                    const parsedItem = expenseItem.fromJson(ei);
                    amount = amount + parsedItem.amount;
                    expenseItems.push(parsedItem);
                }
            }
            this.expenseItems = expenseItems;
            this.amount = amount;
            this.bankAccount = bankAccount.fromJson(jsonData.bankAccount);
        }
        return this;
    }
}
