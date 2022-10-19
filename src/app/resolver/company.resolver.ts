import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Company } from '../company/company.model';
import { CompanyService } from '../company/service/company.service';

@Injectable({
  providedIn: 'root'
})

export class CompanyResolver implements Resolve<Company> {

  constructor(public companyservice: CompanyService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Company> {
    let id = route.params['id']
    return this.companyservice.getDatabyId(id)
  }
}
