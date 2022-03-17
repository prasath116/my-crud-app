import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
  
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  id!: number;
  employee!: Employee;
  constructor(
    public service: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
   ) { }

  ngOnInit(): void {
    console.log("ngOnInit");
    this.id = this.route.snapshot.params['id'];
    this.service.find(this.id).subscribe((data: Employee)=>{
      this.employee = data;
      console.log("Employee : ", data);
    });
  }

}
