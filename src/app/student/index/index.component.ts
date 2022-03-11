import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  students: Student[] = [];

  constructor(public service: StudentService, private router: Router) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(data => {
      this.students = data;
      console.log(this.students);
    });

    /*this.service.stream().subscribe(d=> {
      console.log("dddd : "+d);
    });*/
  }

  deleteStudent(id:number) {
    this.service.delete(id).subscribe(res => {
      this.students = this.students.filter(e => e.id !== id);
      console.log("student deleted successfully");
    });
  }

  editStudent(id:number){
    this.router.navigateByUrl('student/'+id+'/edit');
  }

}
