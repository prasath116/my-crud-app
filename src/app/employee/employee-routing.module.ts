import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
  
const employeeRoutes: Routes = [
  { path: 'employee', redirectTo: 'employee/index', pathMatch: 'full'},
  { path: 'employee/index', component: IndexComponent },
  { path: 'employee/:id/view', component: ViewComponent },
  { path: 'employee/create', component: CreateComponent },
  { path: 'employee/:id/edit', component: EditComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(employeeRoutes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
