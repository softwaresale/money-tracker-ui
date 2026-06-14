import { Pipe, PipeTransform } from '@angular/core';
import { DollarAmount } from '@api-client';

@Pipe({
  name: 'dollarAmount',
})
export class DollarAmountPipe implements PipeTransform {

  transform(value: DollarAmount, ...args: unknown[]): unknown {
    return `$${value.dollars}.${value.cents}`;
  }

}
