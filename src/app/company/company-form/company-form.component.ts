import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from '../company.model';
import { CompanyService } from '../service/company.service';
import { DataCommunicationService } from '../service/data-communication.service';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.scss']
})
export class CompanyFormComponent implements OnInit {
  public companyForm: FormGroup;
  public isSubmitted: boolean;
  public id: any
  public companyData: Company[]
  constructor(public formbuilder: FormBuilder, public companyservice: CompanyService, public activatedroute: ActivatedRoute, public router: Router,
    private dataCommunicationService: DataCommunicationService) {
    this.isSubmitted = false;
    this.companyData = []
    this.companyForm = this.formbuilder.group({
      companyname: ['', [Validators.required, Validators.pattern("[a-zA-Z]*")]],
      companydescription: ['', [Validators.required, Validators.pattern("[a-zA-Z]*")]],
      companytags: ['', [Validators.required]],
      companylogo: ['', [Validators.required]],
      id: Number
    })

    this.activatedroute.params.subscribe((params) => {

      this.id = params['id'];
      this.CompanyDatabyId()
    })
  }

  ngOnInit(): void {
    this.GetCompanyData()
  }


  public saveCopmanyList() {
    this.isSubmitted = true;
    if (this.companyForm.valid) {
      this.isSubmitted = false
      if (this.id) {
        this.UpdateCompanydata();
      }
      else {
        // this.companyservice.postData(this.companyForm.value).subscribe(res => {
        //   console.log(res);
        //   this.GetCompanyData()
        //   this.companyForm.reset()
        // })

        this.companyservice.postData(this.companyForm.value).subscribe((companyData: Company) => {

          this.dataCommunicationService.getListData(companyData);

        })
        this.companyForm.reset()
      }
    }
  }

  GetCompanyData() {
    this.companyservice.getData().subscribe((res:Company[]) => {
      this.companyData = res
    })
  }

  public CompanyDatabyId() {
    this.companyservice.getDatabyId(this.id).subscribe((company: Company) => {
      this.companyForm.patchValue(company)
    })
  }

  public UpdateCompanydata() {
    this.companyservice.updateData(this.companyForm.value, Number(this.id)).subscribe((company: Company) => {
      // this.GetCompanyData()
      this.dataCommunicationService.getListData(company)
    })
    this.router.navigate(['company'])
  }

  public getForm() {
    this.router.navigate(['company', 'add'])
  }

  get companyFormControl() {
    return this.companyForm.controls
  }

}
