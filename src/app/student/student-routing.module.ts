import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
   
const studentRoutes: Routes = [
  { path: 'student', redirectTo: 'student/index', pathMatch: 'full'},
  { path: 'student/index', component: IndexComponent },
  { path: 'student/:id/view', component: ViewComponent },
  { path: 'student/create', component: CreateComponent },
  { path: 'student/:id/edit', component: EditComponent } 
];
   
@NgModule({
  imports: [RouterModule.forChild(studentRoutes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }