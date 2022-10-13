import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.scss']
})
export class CompanyFormComponent implements OnInit {
  public companyForm: FormGroup
  public isSubmitted: boolean;
  constructor(public formbuilder: FormBuilder) {
    this.isSubmitted = false;
    this.companyForm = this.formbuilder.group({
      companyname: ['', [Validators.required]],
      companydescription: ['', [Validators.required]],
      comapanytags: ['', [Validators.required]],
      companylogo: ['', [Validators.required]]
    })

  }

  ngOnInit(): void {
  }
  get companyFormControl() {
    return this.companyForm.controls
  }

}
