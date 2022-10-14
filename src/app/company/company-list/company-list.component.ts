import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from '../company.model';
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
  constructor(private companyservice: CompanyService, private router: Router, private datacommunicationservice: DataCommunicationService) {
    this.company = []
  }

  ngOnInit(): void {
    this.datacommunicationservice.ListData$.subscribe((data: any) => {
      if (data) {
        this.GetCompanyData();
      }
    })
    this.GetCompanyData();
  }

  GetCompanyData() {
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

  public EditCompanyData(id: any) {
    this.router.navigate(['company/edit', id])
  }

}
