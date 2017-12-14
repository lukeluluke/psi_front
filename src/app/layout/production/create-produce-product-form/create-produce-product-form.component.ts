import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProduceProduct} from '../../../shared/model/produce-product.model';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Product} from '../../../shared/model';
import {PaginationInstance} from 'ngx-pagination';
import {MaterialProduct} from '../../../shared/model/material-product.model';

@Component({
    selector: 'app-create-produce-product-form',
    templateUrl: './create-produce-product-form.component.html',
    styleUrls: ['./create-produce-product-form.component.scss']
})
export class CreateProduceProductFormComponent implements OnInit {
    @Output() produceProduceUpdate = new EventEmitter<ProduceProduct>();
    produceProduct: ProduceProduct;
    closeResult: string;

    public pageConfig: PaginationInstance = {
        id: 'material-product-modal',
        itemsPerPage: 3,
        currentPage: 1
    };
    constructor(private modalService: NgbModal) {
        this.produceProduct = new ProduceProduct();
        this.produceProduct.initialize();
    }

    ngOnInit() {

    }

    /**
     * Open modal popup
     * @param content
     */
    open(content) {
        this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }


    onProduceProductAdd(product: Product) {
        this.produceProduct.product = product;
        this.produceProduct.unitPrice = product.price;
    }

    onMaterialProductAdd(product: Product) {
        console.log('Material product add');
        const materialProduct = new MaterialProduct();
        materialProduct.initialize();
        materialProduct.product = product;
        materialProduct.unitPrice = product.price;
        this.produceProduct.materialProducts.push(materialProduct);
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
