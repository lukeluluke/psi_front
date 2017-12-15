import { Observable} from 'rxjs/Observable';
import { UUID } from 'angular2-uuid';
import { Expense } from './expense.model'
import * as moment from 'moment';


export class ExpenseItem {
    uuid: string;
    expense: Expense;
    amount: number;
    note: string;
    createdAt: string;
    updatedAt: string;

    initialize() {
        if (!this.uuid) {
            this.uuid = UUID.UUID();
            this.expense = new Expense();
            this.amount = 0;
            this.note = '';
            const timestamp = moment();
            this.createdAt = timestamp.format();
            this.updatedAt = timestamp.format();
        }
        return this;
    }

    fromJson(jsonData) {
        if (jsonData) {
            const expense = new Expense();
            this.uuid = jsonData.uuid ? jsonData.uuid : '';
            this.expense = expense.fromJson(jsonData.expense);
            this.amount = jsonData.amount ? jsonData.amount : 0;
            this.note = jsonData.note ? jsonData.note : '';
        }
        return this;
    }
}
