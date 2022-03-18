import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { CollegeService } from 'src/app/college/college.service';
import { College } from 'src/app/college/college';
import { DepartmentService } from 'src/app/department/department.service';
import { Department } from 'src/app/department/department';
      
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  form!: FormGroup;
  colleges!: College[];
  departments!: Department[];
  constructor(
    public service: StudentService,
    public collegeService: CollegeService,
    public departmentService: DepartmentService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      age: new FormControl('', Validators.required),
      collegeId: new FormControl('', Validators.required),
      departmentId: new FormControl('', Validators.required)
    });
    this.collegeService.getAll().subscribe((res: College[]) => {
      this.colleges = res;
      //this.collegeIds = res.map(c=>c.id);
      //console.log(this.collegeIds);
    });

    this.departmentService.getAll().subscribe(res => this.departments = res);
  
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.service.create(this.form.value).subscribe((res:any) => {
         console.log('Student created successfully!');
         this.router.navigateByUrl('student/index');
    })
  }
}
