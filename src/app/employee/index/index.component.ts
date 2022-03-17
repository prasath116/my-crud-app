import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  employees: Employee[] = [];

  constructor(public service: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(data => {
      this.employees = data;
      console.log(this.employees);
    });

    /*this.service.stream().subscribe(d=> {
      console.log("dddd : "+d);
    });*/
  }

  deleteEmployee(id:number) {
    this.service.delete(id).subscribe(res => {
      this.employees = this.employees.filter(e => e.id !== id);
      console.log("employee deleted successfully");
    });
  }

  editEmployee(id:number){
    this.router.navigateByUrl('employee/'+id+'/edit');
  }

}
