import { Observable} from 'rxjs/Observable';
import { UUID } from 'angular2-uuid';
import { ExpenseCategory } from './expense-category.model'
import * as moment from 'moment';


export class Expense {
    uuid: string;
    name: string;
    expenseCategory: ExpenseCategory;
    description: string;
    createdAt: string;
    updatedAt: string;

    initialize() {
        if (!this.uuid) {
            this.uuid = UUID.UUID();
            this.name = 'Unknown Expense';
            this.expenseCategory = null;
            this.description = '';
            const timestamp = moment();
            this.createdAt = timestamp.format();
            this.updatedAt = timestamp.format();
            return this;
        }
        return this;
    }

    fromJson(jsonData) {
        if (jsonData) {
            this.uuid = jsonData.uuid ? jsonData.uuid : '';
            this.name = jsonData.name ? jsonData.name : 'Unknown Expense';
            this.expenseCategory = null;
            this.description = jsonData.description ? jsonData.description : '';
            this.createdAt = jsonData.createdAt ? jsonData.createdAt : '';
            this.updatedAt = jsonData.updatedAt ? jsonData.updatedAt : '';
        }
        return this;
    }
}
