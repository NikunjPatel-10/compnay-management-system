import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CompanyModule } from '../company/company.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    CompanyModule,
    RouterModule
  ],
  exports: [HeaderComponent]
})
export class CoreModule { }
