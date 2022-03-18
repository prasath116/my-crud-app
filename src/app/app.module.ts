import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
   
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
   
import { StudentModule } from './student/student.module';
import { EmployeeModule } from './employee/employee.module';
import { CollegeModule } from './college/college.module';
import { DepartmentModule } from './department/department.module';
   
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StudentModule,
    CollegeModule,
    EmployeeModule,
    DepartmentModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }