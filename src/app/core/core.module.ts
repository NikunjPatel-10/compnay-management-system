import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CompanyModule } from '../company/company.module';
import { RouterModule } from '@angular/router';
import { BreadcrumbService } from '../company/service/breadcrumb.service';




@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    CompanyModule,
    RouterModule,
    CompanyModule,
  ],
  exports: [HeaderComponent],
  providers: []
})
export class CoreModule { }
