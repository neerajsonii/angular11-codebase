import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformPipe'
})
export class TransformPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if(!value)
      return null;
    
    return (+(value)).toFixed(2);
  }

}
