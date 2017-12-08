import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {routerTransition} from '../../../router.animations';
import {PaginationInstance} from 'ngx-pagination';
import {Product} from '../../../shared/model';
import {Products, Categories} from '../../../shared/mock';
import {ProductSettingModalComponent} from './product-setting-modal/product-setting-modal.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-product-setting',
    templateUrl: './product-setting.component.html',
    styleUrls: ['./product-setting.component.scss'],
    animations: [routerTransition()]
})
export class ProductSettingComponent implements OnInit {
    public pageConfig: PaginationInstance = {
        id: 'advanced',
        itemsPerPage: 3,
        currentPage: 1
    };
    products: Product[] = [];
    filterProducts: Product[] = [];
    categories = [];
    disabled: boolean = false;
    product: Product;
    constructor(
        private modalService: NgbModal
    ) {
        this.product = new Product();
        this.product.initialize();
        this.categories = this.convertSelectOptions(Categories);
        this.filterProducts = [];
        for (const p of Products) {
            const product = new Product();
            this.products.push(product.fromJson(p));
        }
        Object.assign(this.filterProducts, this.products);
    }

    ngOnInit() {
    }

    createProduct() {
        const modalRef = this.modalService.open(ProductSettingModalComponent);
        modalRef.componentInstance.product = this.product;
        modalRef.componentInstance.headerText = '添加产品';
        modalRef.componentInstance.categories = this.categories;
        modalRef.componentInstance.disabled = false;

    }
    public refreshValue() {

    }

    public searchProduct(event: any): void {
        const searchTerm = event.target.value;
        if (searchTerm !== '') {
            // let findProducts = this.products;
            this.filterProducts = [];
            const findProducts = this.products.filter(
                p => p.name.indexOf(searchTerm) !== -1
            );
            Object.assign(this.filterProducts, findProducts);
        } else {
            Object.assign(this.filterProducts, this.products);
        }
    }

    public selectCategory(value: any): void {

        this.filterProducts = [];
        const categoryId = value.id;
        console.log(categoryId);
        let findProducts = this.products;
        if (categoryId !== -1) {
            findProducts = this.products.filter(p => p.category.uuid === categoryId);
        } else {
            findProducts = this.products;
        }
        Object.assign(this.filterProducts, findProducts);
    }

    removed(value: any): void {
        console.log('Removed value is: ', value);
    }

    typed(value: any): void {
        console.log('New search input: ', value);
    }

    public viewProduct(productUuid: string) {

    }

    public editProduct(productUuid: string) {

    }

    public deleteProduct(productUuid: string) {

    }


    /**
     * Convert object of model to select options with key {id, text)
     * @param objects
     * @returns
     */
    private convertSelectOptions(objects) {
        const options = [];
        for (const obj of objects) {
            const option = {};
            option['id'] = obj.uuid;
            option['text'] = obj.name;
            options.push(option);
        }

        const defaultOption = {
            id: -1,
            text: '显示所有'
        };
        options.push(defaultOption);
        return options;
    }
}
