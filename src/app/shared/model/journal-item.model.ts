import { Observable} from 'rxjs/Observable';
import { UUID } from 'angular2-uuid';

export class JournalItem {
    uuid: string;
    amount: number;
    note: string;

    initialize() {
        if (!this.uuid) {
            this.uuid = UUID.UUID();
        }
        return this;
    }

    fromJson(jsonData) {
        if (jsonData) {
        }
        return this;
    }
}
