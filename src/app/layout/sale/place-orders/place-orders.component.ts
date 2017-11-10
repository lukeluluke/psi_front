import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-place-orders',
  templateUrl: './place-orders.component.html',
  styleUrls: ['./place-orders.component.scss'],
  animations: [routerTransition()]
})
export class PlaceOrdersComponent implements OnInit {
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

  private value: string;

  public selected(value: any): void {
      console.log('Selected value is: ', value);
  }

  public refreshValue(value: any): void {
      this.value = value;
  }
  constructor() { }

  ngOnInit() {
  }

}
