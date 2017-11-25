import { Pipe, PipeTransform } from '@angular/core';
import { OrderTypes } from '../model/config.model';

@Pipe ( { name: 'TypeText'})

export class OrderTypePiple implements PipeTransform {
    transform(value: number, exponent: string): string {
        return OrderTypes[value];
    }
}
