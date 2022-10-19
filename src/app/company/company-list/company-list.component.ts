import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from '../company.model';
import { BreadcrumbService } from '../service/breadcrumb.service';

import { CompanyService } from '../service/company.service';
import { DataCommunicationService } from '../service/data-communication.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {
  // public companylistData: any;
  public company: Company[]
  public id: any
  public filterdata: string

  /**
   * 
   * @param companyservice 
   * @param router 
   * @param datacommunicationservice 
   * @param breadcrumbservice 
   */
  constructor(private companyservice: CompanyService,
    private breadcrumbservice: BreadcrumbService,
    private router: Router,
    private datacommunicationservice: DataCommunicationService,
  ) {
    this.company = [];
    this.filterdata = ''
  }

  ngOnInit(): void {



    this.datacommunicationservice.ListData$.subscribe((data: any) => {
      if (data) {
        this.GetCompanyData();
      }
    })
    this.GetCompanyData();


  }
  public addBreadcrumb() {
    this.breadcrumbservice.breadcrumb.next('add')
  }

  public editBreadCrumb(companyname: string) {
    this.breadcrumbservice.breadcrumb.next(companyname)
  }

  public GetCompanyData() {
    this.companyservice.getData().subscribe((res: Company[]) => {
      this.company = res
    })
  }

  public deleteCompany(id: any) {
    this.companyservice.deleteData(id).subscribe(res => {
      confirm(" are you sure to delete this from list")
      this.GetCompanyData();
    })
  }



}
