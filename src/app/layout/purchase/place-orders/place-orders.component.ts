import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../../router.animations';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Companies } from '../../../shared/mock/mock-company';
import { Products } from '../../../shared/mock/mock-product'
import { PaginationInstance } from 'ngx-pagination';

@Component({
    selector: 'app-place-orders',
    templateUrl: './place-orders.component.html',
    styleUrls: ['./place-orders.component.scss'],
    animations: [routerTransition()]
})
export class PlaceOrdersComponent implements OnInit {
    closeResult: string;
    public pageConfig: PaginationInstance = {
        id: 'advanced',
        itemsPerPage: 3,
        currentPage: 1
    };
    public products = Products;
    public companies = [
        { id: 1, text: 'SWISSE' },
        { id: 2, text: 'BLACKMORE' },
        { id: 3, text: 'HEALTHY CARE' },
        { id: 4, text: 'BIO ISLAND' }
    ];
    public users = [
        { id: 1, text: '张一' },
        { id: 2, text: '李二' },
        { id: 3, text: '王三' },
        { id: 4, text: '赵四' }
    ];
    public divisions = [
        { id: 1, text: '销售' },
        { id: 2, text: '仓库' },
        { id: 3, text: '财务' },
    ];
    public warehouses = [
        { id: 1, text: 'Clayton' },
        { id: 2, text: 'Chadstone' },
    ];
    public orderProducts = [];

    private value: string;
    constructor(
        private modalService: NgbModal
    ) {
    }

    ngOnInit() {
    }
    open(content) {
        this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return  `with: ${reason}`;
        }
    }
    public selected(value: any): void {
        console.log('Selected value is: ', value);
    }

    public removed(value: any): void {
        console.log('Removed value is: ', value);
    }

    public typed(value: any): void {
        console.log('New search input: ', value);
    }

    public refreshValue(value: any): void {
        this.value = value;
    }
    public addProductItem(id: number): void {
        const product = this.products.filter(x => x.id === id);
        if (product) {
            const productLength = this.orderProducts.length;
            const selectProduct = {};
            Object.assign(selectProduct, product[0]);
            selectProduct['price'] = this.orderProducts.length;
            selectProduct['row'] = productLength + 1;
            this.orderProducts.push(selectProduct);
        }
    }
}
