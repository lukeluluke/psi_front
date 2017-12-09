import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {routerTransition} from '../../../router.animations';
import {PaginationInstance} from 'ngx-pagination';
import {Category, Product} from '../../../shared/model';
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
        id: 'product-setting-pagination',
        itemsPerPage: 3,
        currentPage: 1
    };
    products: Product[] = [];
    categories: Category[] = [];
    filterProducts: Product[] = [];
    categoryOptions = [];
    disabled: boolean = false;
    product: Product;
    constructor(
        private modalService: NgbModal
    ) {
        this.categoryOptions = this.convertSelectOptions(Categories);
        this.filterProducts = [];
        for (const p of Products) {
            const product = new Product();
            this.products.push(product.fromJson(p));
        }

        for (const c of Categories) {
            const category = new Category();
            this.categories.push(category.fromJson(c));
        }
        Object.assign(this.filterProducts, this.products);
    }

    ngOnInit() {
    }

    createProduct() {
        this.product = new Product();
        this.product.initialize();
        const modalRef = this.modalService.open(ProductSettingModalComponent);
        modalRef.componentInstance.product = this.product;
        modalRef.componentInstance.headerText = '添加产品';
        modalRef.componentInstance.categories = this.categories;
        modalRef.componentInstance.categoryOptions = this.categoryOptions;
        modalRef.componentInstance.disabled = false;
        modalRef.componentInstance.productAdd.subscribe(newProduct => {
            this.onProductCreate(newProduct);
            modalRef.dismiss();
        });

    }

    public viewProduct(product: Product) {
        const modalRef = this.modalService.open(ProductSettingModalComponent);
        modalRef.componentInstance.product = product;
        modalRef.componentInstance.headerText = '查看产品';
        modalRef.componentInstance.categories = this.categories;
        modalRef.componentInstance.categoryOptions = this.categoryOptions;
        modalRef.componentInstance.disabled = true;
        modalRef.componentInstance.selectedCategory = [product.category.name];
    }

    public editProduct(product: Product) {
        const modalRef = this.modalService.open(ProductSettingModalComponent);
        modalRef.componentInstance.product = product;
        modalRef.componentInstance.headerText = '编辑产品';
        modalRef.componentInstance.categories = this.categories;
        modalRef.componentInstance.categoryOptions = this.categoryOptions;
        modalRef.componentInstance.disabled = false;
        modalRef.componentInstance.selectedCategory = [product.category.name];
        modalRef.componentInstance.productAdd.subscribe(editProduct => {
           this.onProductUpdate(editProduct);
            modalRef.dismiss();
        });
    }

    public deleteProduct(product: Product) {
        this.filterProducts = this.filterProducts.filter(p => p.uuid !== product.uuid);
    }

    private onProductCreate(product: Product) {
       this.products.unshift(product);
       Object.assign(this.filterProducts, this.products);
    }

    private onProductUpdate(product: Product) {
        this.filterProducts = this.filterProducts.filter(p => p.uuid !== product.uuid);
        this.filterProducts.unshift(product);
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
