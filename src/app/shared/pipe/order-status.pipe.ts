import { Pipe, PipeTransform } from '@angular/core';
import { OrderStatus } from '../model/config.model';

@Pipe ( { name: 'StatusText'})

export class OrderStatusPipe implements PipeTransform {
    transform(value: number, exponent: string): string {
        return OrderStatus[value];
    }
}
