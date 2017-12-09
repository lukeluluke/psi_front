import { Observable} from 'rxjs/Observable';
import { UUID } from 'angular2-uuid';
import * as moment from 'moment';


export class ExpenseCategory {
    uuid: string;
    name: string;
    description: string;
    createdAt: string;
    updatedAt: string;

    initialize() {
        if (!this.uuid) {
            this.uuid = UUID.UUID();
            this.name = 'Unknown Expense Category';
            this.description = '';
            const timestamp = moment();
            this.createdAt = timestamp.format();
            this.updatedAt = timestamp.format();
        }
    }

    fromJson(jsonData) {
        if (jsonData) {
            this.uuid = jsonData.uuid ? jsonData.uuid : '';
            this.name = jsonData.name ? jsonData.name : 'Unknown Expense Category';
            this.createdAt = jsonData.createdAt ? jsonData.createdAt : '';
            this.updatedAt = jsonData.updatedAt ? jsonData.updatedAt : '';
        }
        return this;
    }
}
