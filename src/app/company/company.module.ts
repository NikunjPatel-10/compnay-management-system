import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';
import { CompanyFormComponent } from './company-form/company-form.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyPipe } from './pipe/company.pipe';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CompanyComponent,
    CompanyFormComponent,
    CompanyListComponent,
    CompanyPipe
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    RouterModule,

  ]
})
export class CompanyModule { }
