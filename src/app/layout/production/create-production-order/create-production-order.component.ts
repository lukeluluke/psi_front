import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../../router.animations';
import {ProduceProduct} from '../../../shared/model/produce-product.model';
import {ProductionOrder} from '../../../shared/model/production-order';

@Component({
    selector: 'app-create-production-order',
    templateUrl: './create-production-order.component.html',
    styleUrls: ['./create-production-order.component.scss'],
    animations: [routerTransition()]
})
export class CreateProductionOrderComponent implements OnInit {
    produceOrder: ProductionOrder;
    disabledInput: boolean = false;
    constructor() {
        this.produceOrder = new ProductionOrder();
        this.produceOrder.initialize();
    }

    ngOnInit() {
    }

    onProduceOrderCreate(produceOrder: ProductionOrder) {
        if (produceOrder) {
            this.produceOrder = produceOrder;
            alert('Produce order created');
        }
    }

}
