import { Product } from './product.model';
import { UUID } from 'angular2-uuid';
import {MaterialProduct} from './material-product.model';
import * as moment from 'moment';
export class ProduceProduct {
    uuid: string;
    product: Product;
    materialProducts: MaterialProduct[];
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
            const timestamp = moment();
            this.uuid = UUID.UUID();
            this.product = new Product();
            this.materialProducts = [];
            this.quantity = 1;
            this.note = null;
            this.createdAt = timestamp.format();
            this.updatedAt = timestamp.format();
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
            this.note = jsonData.note ? jsonData.note : null;
            this.product = product.fromJson(jsonData.product);
            this.stockQuantity = jsonData.stockQuantity ? jsonData.stockQuantity : null;
            this.produceDate = jsonData.produceDate ? jsonData.produceDate : '';
            this.batchNumber = jsonData.batchNumber ? jsonData.batchNumber : '';
            this.createdAt = jsonData.createdAt ? jsonData.createdAt : null;
            this.updatedAt = jsonData.updatedAt ? jsonData.updatedAt : null;
            const materialProducts = [];
            if (jsonData.materialProducts && jsonData.materialProducts.length > 0) {
                for (const m of jsonData.materialProducts) {
                    const materialProduct = new MaterialProduct();
                    materialProducts.push(materialProduct.fromJson(m));
                }
            }
            this.materialProducts = materialProducts;
        }
        return this;
    }

}
