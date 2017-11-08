import {Component, OnInit} from '@angular/core';
import {Companies} from '../../../shared/mock/mock-company';

@Component({
    selector: 'app-place-orders',
    templateUrl: './place-orders.component.html',
    styleUrls: ['./place-orders.component.scss']
})
export class PlaceOrdersComponent implements OnInit {
    companies = Companies;

    constructor() {
    }

    ngOnInit() {
    }

}
