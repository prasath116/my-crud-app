import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { College } from 'src/app/college/college';
import { CollegeService } from 'src/app/college/college.service';
import { DepartmentService } from 'src/app/department/department.service';
import { Department } from 'src/app/department/department';
      
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
       
  id!: number;
  form!: FormGroup;
  student!: Student;
  colleges!: College[];
  departments!: Department[];
     
  constructor(
    public studentService: StudentService,
    public collegeService: CollegeService,
    public departmentService: DepartmentService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
     
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.collegeService.getAll().subscribe(res => this.colleges = res);   
    this.departmentService.getAll().subscribe(res => this.departments = res);
    this.studentService.find(this.id).subscribe(data => this.student = data); 
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      age: new FormControl('', Validators.required),
      collegeId: new FormControl('', Validators.required),
      departmentId: new FormControl('', Validators.required)
    });
  }
     
  /**
   * Write code on Method
   *
   * @return response()
   */
  get f(){
    return this.form.controls;
  }
     
  /**
   * Write code on Method
   *
   * @return response()
   */
  submit(){
    console.log(this.form.value);
    this.studentService.update(this.id, this.form.value).subscribe((res:any) => {
         console.log('Student updated successfully!');
         this.router.navigateByUrl('student/index');
    })
  }
    
}