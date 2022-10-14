import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'company'
})
export class CompanyPipe implements PipeTransform {
  charAt: any;

  transform(companyname: string) {
    return this.charAt(0).toUpperCase() + this.charAt(1).toUpperCase() + companyname;
  }

}
