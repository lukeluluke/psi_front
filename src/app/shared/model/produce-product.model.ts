import { Product } from './product.model';
import { UUID } from 'angular2-uuid';
import {MaterialProduct} from './material-product.model';
export class ProduceProduct {
    uuid: string;
    product: Product;
    materialProducts: MaterialProduct[];
    quantity: number;
    unitPrice: number;
    amount: number;
    note: string;
    stockQuantity: number;
    initialize() {
        if (!this.uuid) {
            this.uuid = UUID.UUID();
            this.product = new Product();
            this.materialProducts = [];
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
