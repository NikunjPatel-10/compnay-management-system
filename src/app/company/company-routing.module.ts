import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyFormComponent } from './company-form/company-form.component';
import { CompanyComponent } from './company.component';

const routes: Routes = [{
  path: '', component: CompanyComponent,

  children: [
    {
      path: 'add',
      component: CompanyFormComponent,
      data: { breadcrumb: { alias: 'add' } },
    },
    {
      path: 'edit/:id',
      component: CompanyFormComponent,
      data: { breadcrumb: { alias: 'edit/:id' } }
    }
  ]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
