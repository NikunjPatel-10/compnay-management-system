import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Company } from '../company.model';

@Injectable({
  providedIn: 'root'
})
export class DataCommunicationService {
  public ListData: Subject<Company>
  public ListData$: Observable<Company>
  constructor() {
    this.ListData = new Subject();
    this.ListData$ = this.ListData.asObservable()
  }

  getListData(company: Company) {
    this.ListData.next(company)
  }
}
