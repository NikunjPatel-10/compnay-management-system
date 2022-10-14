import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'company'
})
export class CompanyPipe implements PipeTransform {

  transform(value: string): any {
    let charAt = value
      .split(" ")
      .map((data) => data[0])
      .join("").toUpperCase()

    return charAt;
  }

}
