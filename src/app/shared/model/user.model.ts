import { Observable} from 'rxjs/Observable';
import { UUID } from 'angular2-uuid';
import * as moment from 'moment';

export class User {
    uuid: string;
    firstName: string;
    lastName: string;
    role: number;
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
            this.firstName = jsonData.firstName ? jsonData.firstName : '';
            this.lastName = jsonData.lastName ? jsonData.lastName : '';
            this.role = jsonData.role ? jsonData.role : '';
            this.createdAt = jsonData.createdAt ? jsonData.createdAt : '';
            this.updatedAt = jsonData.updatedAt ? jsonData.updatedAt : '';
        }
        return this;
    }

    getFullName() {
        return this.lastName + ' ' + this.firstName;
    }
}
