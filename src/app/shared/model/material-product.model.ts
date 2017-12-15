import { Product } from './product.model';
import { UUID } from 'angular2-uuid';

export class MaterialProduct {
    uuid: string;
    product: Product;
    quantity: number;
    produceDate: string;
    batchNumber: string;
    unitPrice: number;
    amount: number;
    note: string;
    stockQuantity: number;
    createdAt: string;
    updatedAt: string;
    initialize() {
        if (!this.uuid) {
            this.uuid = UUID.UUID();
            this.product = new Product();
            this.quantity = 1;
            this.note = '';
        }
        return this;
    }

    fromJson(jsonData) {
        if (jsonData) {
            const product = new Product();
            this.uuid = jsonData.uuid ? jsonData.uuid : '';
            this.quantity = jsonData.quantity ? jsonData.quantity : null;
            this.unitPrice = jsonData.unitPrice ? jsonData.unitPrice : null;
            this.amount = jsonData.amount ? jsonData.amount : null;
            this.note = jsonData.note ? jsonData.note : '';
            this.product = product.fromJson(jsonData.product);
            this.stockQuantity = jsonData.stockQuantity ? jsonData.stockQuantity : null;
            this.produceDate = jsonData.produceDate ? jsonData.produceDate : '';
            this.batchNumber = jsonData.batchNumber ? jsonData.batchNumber : '';
            this.createdAt = jsonData.createdAt ? jsonData.createdAt : null;
            this.updatedAt = jsonData.updatedAt ? jsonData.updatedAt : null;
        }
        return this;
    }

}
