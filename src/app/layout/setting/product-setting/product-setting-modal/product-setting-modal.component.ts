import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Category, Product} from '../../../../shared/model';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-product-setting-modal',
    templateUrl: './product-setting-modal.component.html',
    styleUrls: ['./product-setting-modal.component.scss'],
})
export class ProductSettingModalComponent  {
    @Input() categories: Category[];
    @Input() selectedCategory = [];
    @Input() product: Product;
    @Input() categoryOptions;
    @Input() disabled: boolean = true;
    @Input() headerText: string;
    @Output() productAdd = new EventEmitter<Product>();
    constructor(
        public activeModal: NgbActiveModal
    ) {

    }

    /**
     * When close modal popup
     * @returns {string}
     */
    closeModal() {
        this.activeModal.dismiss('Close');
    }

    selectCategory(value: any) {
        const selectCategory = this.categories.filter(c => c.uuid === value.id);
        this.product.category = selectCategory[0];
    }

    refreshValue() {

    }

    removed() {

    }

    typed() {

    }

     updateProduct(product: Product) {
        if (product && product.category) {
            this.productAdd.emit(product);
        } else {
            alert('请输入完整产品信息');
        }
    }

}
