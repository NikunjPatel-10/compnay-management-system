import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Company } from '../company.model';
import { CompanyService } from '../service/company.service';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.scss']
})
export class CompanyFormComponent implements OnInit {
  public companyForm: FormGroup;
  public isSubmitted: boolean;
  public id: any
  constructor(public formbuilder: FormBuilder, public companyservice: CompanyService, public activatedroute: ActivatedRoute) {
    this.isSubmitted = false;
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
  }


  public saveCopmanyList() {
    this.isSubmitted = true;
    this.companyservice.postData(this.companyForm.value).subscribe(res => {
      console.log(res);
    })
  }

  public CompanyDatabyId() {
    this.companyservice.getDatabyId(this.id).subscribe((company: Company) => {
      this.companyForm.patchValue(company)
    })
  }

  get companyFormControl() {
    return this.companyForm.controls
  }

}
