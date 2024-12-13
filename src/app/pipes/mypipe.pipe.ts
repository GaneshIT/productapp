import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  transform(type: string, ...args: unknown[]): string {
      return (type=='Computer'?'red':'blue');
  }
}
