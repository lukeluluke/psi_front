import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../router.animations';
import {PaginationInstance} from 'ngx-pagination';
import {InventoryProduct} from '../../shared/model/inventory-product.model';
import {Categories, Warehouses} from '../../shared/mock';
import {InventoryProducts} from '../../shared/mock/mock-inventory-products';
import {assign} from 'rxjs/util/assign';

@Component({
    selector: 'app-inventory',
    templateUrl: './inventory.component.html',
    styleUrls: ['./inventory.component.scss'],
    animations: [routerTransition()]
})
export class InventoryComponent implements OnInit {
    public pageConfig: PaginationInstance = {
        id: 'inventory-list',
        itemsPerPage: 5,
        currentPage: 1
    };
    filterInventory: InventoryProduct[];
    tempFilterInventory: InventoryProduct[];
    inventories: InventoryProduct[];

    warehouses = [];
    categories = [];

    filterWarehouseUuid: string = '';
    filterCategoryUuid: string = '';
    filterKeyword: string = '';
    constructor() {
        this.warehouses = this.convertSelectOptions(Warehouses);
        this.categories = this.convertSelectOptions(Categories);
        this.inventories = [];
        this.filterInventory = [];
        this.tempFilterInventory = [];
        for (const i of InventoryProducts) {
            const inventoryProduct = new InventoryProduct();
            this.inventories.push(inventoryProduct.fromJson(i));
        }
        Object.assign(this.filterInventory, this.inventories);
        Object.assign(this.tempFilterInventory, this.inventories);

    }

    ngOnInit() {
    }

    selectWarehouse(value) {
        this.filterWarehouseUuid = (value.id !== -1) ? value.id : '';
        this.filterInventoryProducts();
    }

    selectCategory(value) {
        this.filterCategoryUuid = (value.id !== -1) ? value.id : '';
        this.filterInventoryProducts();
    }

    searchInventoryProduct(event: any): void {
        this.filterKeyword = event.target.value;
        this.filterInventoryProducts();
    }

    filterInventoryProducts() {
        let allInventories = [];
        Object.assign(allInventories, this.inventories);
        if (this.filterCategoryUuid !== '') {
            const categoryInventories = allInventories.filter(i => i.product.category.uuid === this.filterCategoryUuid);
            allInventories = [];
            Object.assign(allInventories, categoryInventories);
        }
        if (this.filterWarehouseUuid !== '') {
            const warehouseInventories = allInventories.filter(i => i.warehouse.uuid === this.filterWarehouseUuid);
            allInventories = [];
            Object.assign(allInventories, warehouseInventories);
        }
        if (this.filterKeyword !== '') {
            const searchInventories = allInventories.filter(i => i.product.name.indexOf(this.filterKeyword) !== -1);
            allInventories = [];
            Object.assign(allInventories, searchInventories);
        }
        this.filterInventory = [];
        Object.assign(this.filterInventory, allInventories);
    }

    removed(value: any): void {
        console.log('Removed value is: ', value);
    }

    typed(value: any): void {
        console.log('New search input: ', value);
    }

    refreshValue(value: any): void {

    }

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
