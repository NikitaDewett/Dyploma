import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hashTag'
})
export class HashPipe implements PipeTransform {
    transform(value: string): string {
        value  = value.split('#')[0]
        return value
    }

}