import { Pipe, PipeTransform } from '@angular/core';
import { TransactionStatus } from '../model/config.model';

@Pipe ( { name: 'TransactionStatusText'})

export class TransactionStatusPipe implements PipeTransform {
    transform(value: number, exponent: string): string {
        console.log(value);
        return TransactionStatus[value];
    }
}
