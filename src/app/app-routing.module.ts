import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'company', loadChildren: () => import('./company/company.module').then(m => m.CompanyModule) },
{
  path: '',
  pathMatch: 'full',
  redirectTo: 'company'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
