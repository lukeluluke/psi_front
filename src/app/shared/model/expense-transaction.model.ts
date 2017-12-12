import {Observable} from 'rxjs/Observable';
import * as moment from 'moment';
import {UUID} from 'angular2-uuid';
import { ExpenseItem } from './expense-item.model';
import { User} from './user.model';
import { Company } from './company.model';
import { Division } from './division.model';


export class ExpenseTransaction {
    static OPEN = 0;
    static CLOSED = 1;
    static DELETED = 2;
    uuid: string;
    status: number; // 0 => open; 1 => closed; 2 => deleted
    expenseItems: ExpenseItem[];
    toWhom: Company;
    byWhom: User;
    division: Division;
    note: string;
    createdAt: string;
    updatedAt: string;
    initialize() {
        if (!this.uuid) {
            this.uuid = UUID.UUID();
            this.status = 0
            this.expenseItems = [];
            this.toWhom = null;
            this.byWhom = null;
            this.division = null;
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
                    expenseItems.push(expenseItem.fromJson(ei));
                }
            }
            this.expenseItems = expenseItems;
        }
        return this;
    }
}
