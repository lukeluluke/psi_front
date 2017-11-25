import { Pipe, PipeTransform } from '@angular/core';
import { OrderStatus } from '../model/config.model';

@Pipe ( { name: 'StatusText'})

export class OrderStatusPiple implements PipeTransform {
    transform(value: number, exponent: string): string {
        return OrderStatus[value];
    }
}
