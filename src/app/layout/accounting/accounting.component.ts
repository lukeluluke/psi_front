import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { PaginationInstance } from 'ngx-pagination';

@Component({
    selector: 'app-accounting',
    templateUrl: './accounting.component.html',
    styleUrls: ['./accounting.component.scss'],
    animations: [routerTransition()]
})
export class AccountingComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
