import {Component, OnInit, Input, Output, EventEmitter, ViewChild} from '@angular/core';
import {Product} from '../../../../shared/model';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-product-setting-modal',
    templateUrl: './product-setting-modal.component.html',
    styleUrls: ['./product-setting-modal.component.scss'],
})
export class ProductSettingModalComponent  {
    @Input() product: Product;
    @Input() categories;
    @Input() disabled: boolean = false;
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
        console.log(value);
    }

    refreshValue() {

    }

    removed() {

    }

    typed() {

    }

     updateProduct() {
        console.log(this.product);
    }

}
