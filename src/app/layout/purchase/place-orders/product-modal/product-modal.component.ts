import {Component, Output, OnInit, EventEmitter} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {Products, Categories} from '../../../../shared/mock';
import {Product} from '../../../../shared/model';

@Component({
    selector: 'app-product-modal',
    templateUrl: './product-modal.component.html',
    styleUrls: ['./product-modal.component.scss']
})
export class ProductModalComponent implements OnInit {
    @Output() productAdd = new EventEmitter<Product>();
    closeResult: string;
    public products: Product[];
    public filterProducts: Product[];
    public categories;
    public selectCategoryId: string;

    constructor(private modalService: NgbModal) {
        this.products = [];
        this.categories = [];
        this.filterProducts = [];
        for (const p of Products) {
            const product = new Product();
            product.uuid = p.uuid;
            product.name = p.name;
            product.spec = p.spec;
            product.sku = p.sku;
            product.barcode = p.barcode;
            product.model = p.model;
            product.categoryId = p.categoryId;
            product.price = p.price;
            this.products.push(product);
        }

        for (const c of Categories) {
            const category = {};
            category['id'] = c.uuid;
            category['text'] = c.name;
            this.categories.push(category);
        }
        const defaultCategory = {
            id: 1,
            text: '所有产品'
        };
        this.categories.push(defaultCategory);

        /**
         * Assign all products to filterProducts to avoid two objects has same reference
         */
        Object.assign(this.filterProducts, this.products);
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

    /**
     * When click a product, send selected product to parent component
     * @param {string} uuid
     */
    public addProductItem(uuid: string): void {
        const product = this.products.filter(x => x.uuid === uuid);
        if (product) {
            this.productAdd.emit(product[0]);
        } else {
            alert('Product not found');
        }
    }


    selectCategory(value: any): void {
        this.filterProducts = [];
        const categoryId = value.id;
        let findProducts = this.products;
        if (categoryId !== 1) {
             findProducts = this.products.filter(p => p.categoryId === categoryId);
        }
        Object.assign(this.filterProducts, findProducts);
    }

    removed(value: any): void {
        console.log('Removed value is: ', value);
    }

    typed(value: any): void {
        console.log('New search input: ', value);
    }

    refreshValue(value: any): void {

    }

}
