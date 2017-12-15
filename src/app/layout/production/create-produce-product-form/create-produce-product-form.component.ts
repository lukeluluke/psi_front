import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {ProduceProduct} from '../../../shared/model/produce-product.model';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Product} from '../../../shared/model';
import {PaginationInstance} from 'ngx-pagination';
import {MaterialProduct} from '../../../shared/model/material-product.model';

@Component({
    selector: 'app-create-produce-product-form',
    templateUrl: './create-produce-product-form.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./create-produce-product-form.component.scss'],
})
export class CreateProduceProductFormComponent implements OnInit {
    @Output() produceProduceUpdate = new EventEmitter<ProduceProduct>();
    produceProduct: ProduceProduct;
    closeResult: string;
    modalReference: any;

    public pageConfig: PaginationInstance = {
        id: 'material-product-modal',
        itemsPerPage: 3,
        currentPage: 1
    };

    constructor(private modalService: NgbModal) {

    }

    ngOnInit() {
    }

    /**
     * Open modal popup
     * @param content
     */
    open(content) {
        /**
         * Need to re-initialize produce product
         * @type {ProduceProduct}
         */
        this.produceProduct = new ProduceProduct();
        this.produceProduct.initialize();
        this.modalReference = this.modalService.open(content, {size: 'lg', windowClass: 'large-modal-window'})
        this.modalReference.result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }


    onProduceProductAdd(product: Product) {
        this.produceProduct.product = product;
        this.produceProduct.unitPrice = product.price;
        this.produceProduct.amount = this.produceProduct.unitPrice * this.produceProduct.quantity;
    }

    onMaterialProductAdd(product: Product) {
        const materialProduct = new MaterialProduct();
        materialProduct.initialize();
        materialProduct.product = product;
        materialProduct.unitPrice = product.price;
        materialProduct.amount = materialProduct.unitPrice * materialProduct.quantity;
        this.produceProduct.materialProducts.push(materialProduct);
    }

    addProduceProduct(produceProduct: ProduceProduct) {
        if (produceProduct) {
            this.produceProduceUpdate.emit(produceProduct);
            this.modalReference.close();
        } else {
            alert('暂时不能保存， 请稍后再试');
        }
    }

    isValidProduceProduct() {
        return !(this.produceProduct.product && this.produceProduct.materialProducts
        && this.produceProduct.materialProducts.length > 0);
    }

    /**
     * When close modal popup
     * @param reason
     * @returns {string}
     */
    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }

}
