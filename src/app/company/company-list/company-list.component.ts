import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from '../company.model';
import { CompanyService } from '../service/company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {
  public companylistData: any;
  public company: Company[]
  public id: any
  constructor(private companyservice: CompanyService, private router: Router) {
    this.company = []
  }

  ngOnInit(): void {
    this.GetComapanyData();
  }

  GetComapanyData() {
    this.companyservice.getData().subscribe((res) => {
      this.company = res
    })
  }

  public deleteCompany(id: any) {
    this.companyservice.deleteData(id).subscribe(res => {
      this.GetComapanyData();
    })
  }

  public EditCompanyData(id: any) {
    this.router.navigate(['company/edit', id])
  }

}
