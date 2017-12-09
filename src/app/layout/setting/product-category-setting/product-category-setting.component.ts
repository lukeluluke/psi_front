import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../../router.animations';
import {PaginationInstance} from 'ngx-pagination';
import {Category, Product} from '../../../shared/model';
import {Categories} from '../../../shared/mock';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ProductCategorySettingModalComponent} from './product-category-setting-modal/product-category-setting-modal.component';

@Component({
    selector: 'app-product-category-setting',
    templateUrl: './product-category-setting.component.html',
    styleUrls: ['./product-category-setting.component.scss'],
    animations: [routerTransition()]
})
export class ProductCategorySettingComponent implements OnInit {
    public pageConfig: PaginationInstance = {
        id: 'advanced',
        itemsPerPage: 3,
        currentPage: 1
    };
    categories: Category[] = [];
    filterCategories: Category[] = [];
    category: Category;
    disabled: boolean = false;
    constructor(
        private modalService: NgbModal
    ) {
        for (const c of Categories) {
            const category = new Category();
            this.categories.push(category.fromJson(c));
        }

        Object.assign(this.filterCategories, this.categories);
    }

    ngOnInit() {
    }

    public createCategory() {
        this.category = new Category();
        this.category.initialize();
        const modalRef = this.modalService.open(ProductCategorySettingModalComponent);
        modalRef.componentInstance.category = this.category;
        modalRef.componentInstance.headerText = '添加分类';
        modalRef.componentInstance.disabled = false;
        modalRef.componentInstance.categoryAdd.subscribe(newCategory => {
            this.onCategoryCreate(newCategory);
            modalRef.dismiss();
        });
    }

    private onCategoryCreate(category: Category) {
        this.categories.unshift(category);
        Object.assign(this.filterCategories, this.categories);
    }

    public viewCategory(category: Category) {
        const modalRef = this.modalService.open(ProductCategorySettingModalComponent);
        modalRef.componentInstance.category = category;
        modalRef.componentInstance.headerText = '查看分类';
        modalRef.componentInstance.disabled = true;
    }
    public editCategory(category: Category) {
        const modalRef = this.modalService.open(ProductCategorySettingModalComponent);
        modalRef.componentInstance.category = category;
        modalRef.componentInstance.headerText = '编辑分类';
        modalRef.componentInstance.disabled = false;
        modalRef.componentInstance.categoryAdd.subscribe(editCategory => {
            this.onCategoryUpdate(editCategory);
            modalRef.dismiss();
        });
    }

    private onCategoryUpdate(category) {
        this.filterCategories = this.filterCategories.filter(c => c.uuid !== category.uuid);
        console.log(category);
        this.filterCategories.unshift(category);
    }

    public deleteCategory(category: Category) {
        this.filterCategories = this.filterCategories.filter(c => c.uuid !== category.uuid);
    }

    public searchCategory(event: any) {

        const searchTerm = event.target.value;
        if (searchTerm !== '') {
            // let findProducts = this.products;
            this.filterCategories = [];
            const findCategories = this.categories.filter(
                c => c.name.indexOf(searchTerm) !== -1
            );
            Object.assign(this.filterCategories, findCategories);
        } else {
            Object.assign(this.filterCategories, this.categories);
        }
    }
}
