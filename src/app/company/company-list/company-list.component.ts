import { Component, OnInit } from '@angular/core';
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
  constructor(private companyservice: CompanyService) {
    this.company = []
  }

  ngOnInit(): void {
    this.GetComapanyData();
  }

  GetComapanyData() {
    this.companyservice.getData().subscribe((res) => {
      this.companylistData = res
    })
  }

}
