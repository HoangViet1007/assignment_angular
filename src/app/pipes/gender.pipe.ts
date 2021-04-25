import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: Number): string {
     switch (value) {
      case 1: return "Nam";
      case 2: return "Nữ";
      default: return "Khác";
     }
  }

}
