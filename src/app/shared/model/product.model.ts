import { Observable} from 'rxjs/Observable';
import { Category } from './category.model';
import { UUID } from 'angular2-uuid';
import * as moment from 'moment';

export class Product {
    uuid: string;
    category: Category;
    sku: string;
    name: string;
    barcode: string;
    spec: string;
    model: string;
    price: number;
    note: string;
    createdAt: string;
    updatedAt: string;



    initialize() {
        if (!this.uuid) {
            const timestamp = moment();
            this.uuid = UUID.UUID();
            this.createdAt = timestamp.format();
            this.updatedAt = timestamp.format();
            return this;
        }
    }

    fromJson(jsonData) {
        if (jsonData) {
            const category = new Category();
            this.uuid = jsonData.uuid ? jsonData.uuid : '';
            this.category = category.fromJson(jsonData.category);
            this.sku = jsonData.sku ? jsonData.sku : '';
            this.name = jsonData.name ? jsonData.name : '';
            this.barcode = jsonData.barcode ? jsonData.barcode : '';
            this.spec = jsonData.spec ? jsonData.spec : '';
            this.model = jsonData.model ? jsonData.model : '';
            this.price = jsonData.price ? jsonData.price : '';
            this.note = jsonData.note ? jsonData.note : '';
            this.createdAt = jsonData.createdAt ? jsonData.createdAt : '';
            this.updatedAt = jsonData.updatedAt ? jsonData.updatedAt : '';
        }
        return this;
    }


}
