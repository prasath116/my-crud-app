import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
    
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
   
import { Student } from './student';
import { environment } from 'src/environments/environment';
import { AbstractService } from '../abstract.service';
    
@Injectable({
  providedIn: 'root'
})
export class StudentService extends AbstractService {
    private apiURL = environment.studentUrl;
    
  constructor(private httpClient: HttpClient) { super();}

  stream(): Observable<any> {
    return this.httpClient.get<any>(this.apiURL + '/stream-flux')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getAll(): Observable<Student[]> {
    console.log("is prod : "+environment.production);
    return this.httpClient.get<Student[]>(this.apiURL + '/findAll')
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  create(student:Student): Observable<Student> {
    return this.httpClient.post<Student>(this.apiURL + '/add', JSON.stringify(student), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
    
  find(id:number): Observable<Student> {
    return this.httpClient.get<Student>(this.apiURL + '/get-by/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  update(id:number, student:Student): Observable<Student> {
    return this.httpClient.put<Student>(this.apiURL + '/update/' + id, JSON.stringify(student), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  delete(id:number){
    return this.httpClient.delete<Student>(this.apiURL + '/delete/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
     
}
