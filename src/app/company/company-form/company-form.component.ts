import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from '../company.model';
import { BreadcrumbService } from '../service/breadcrumb.service';
import { CompanyService } from '../service/company.service';
import { DataCommunicationService } from '../service/data-communication.service';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.scss']
})
export class CompanyFormComponent implements OnInit {
  public items = [
    { name: 'Python' },
    { name: 'Node Js' },
    { name: 'Java' },
    { name: 'PHP' },
    { name: 'Django' },
    { name: 'Angular' },
    { name: 'Vue' },
    { name: 'ReactJs' },
  ];
  public companyForm: FormGroup;
  public isSubmitted: boolean;
  public id: number;
  public companyData: Company[]
  selected: any;

  subjectData!: string

  constructor(public formbuilder: FormBuilder, public companyservice: CompanyService, public activatedroute: ActivatedRoute, public router: Router,
    private dataCommunicationService: DataCommunicationService, private breadcrumb: BreadcrumbService
  ) {
    this.id = 0
    this.isSubmitted = false;
    this.companyData = []
    this.companyForm = this.formbuilder.group({
      companyname: ['', [Validators.required]],
      companydescription: ['', [Validators.required]],
      companytags: ['', [Validators.required]],
      companylogo: ['', [Validators.required]],
    })


    this.activatedroute.params.subscribe((params) => {

      this.id = params['id'];
      // console.log(this.id);
      this.activatedroute.data.subscribe(res => {
        this.companyForm.patchValue(res['company'])
      })
    })
  }

  ngOnInit(): void {

    this.GetCompanyData()
    this.breadcrumb.breadcrumb.subscribe(res => this.subjectData = res)
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
    this.companyservice.getData().subscribe((res) => {
      this.companyData = res
    })
  }

  // public CompanyDatabyId() {
  //   this.companyservice.getDatabyId((this.id)).subscribe(company => {
  //     this.companyForm.patchValue(company)
  //   })
  // }

  public UpdateCompanydata() {
    this.companyservice.updateData(this.companyForm.value, this.id).subscribe((company: Company) => {
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
