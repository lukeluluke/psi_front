import { Observable} from 'rxjs/Observable';
import * as moment from 'moment';
import { UUID } from 'angular2-uuid';

export class Category {
    uuid: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    createdBy: string;

    initialize() {
        if (!this.uuid) {
            const timestamp = moment();
            this.uuid = UUID.UUID();
            this.createdAt = timestamp.format();
            this.updatedAt = timestamp.format();
        }
    }
}
