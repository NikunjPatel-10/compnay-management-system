import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';
import { CompanyFormComponent } from './company-form/company-form.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyPipe } from './pipe/company.pipe';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { SearchPipe } from './pipe/search.pipe';
import { NgDynamicBreadcrumbModule } from 'ng-dynamic-breadcrumb';
import { CompanyService } from './service/company.service';
import { DataCommunicationService } from './service/data-communication.service';
import { ResolverService } from './service/resolver.service';


@NgModule({
  declarations: [
    CompanyComponent,
    CompanyFormComponent,
    CompanyListComponent,
    CompanyPipe,
    SearchPipe,

  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule,
    NgDynamicBreadcrumbModule

  ],
  exports: [
    CompanyFormComponent,
    CompanyListComponent
  ],
  providers: [
    CompanyService,
    DataCommunicationService,
    ResolverService
  ]
})
export class CompanyModule { }
