import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
    
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
   
import { Employee } from './employee';
import { environment } from 'src/environments/environment';
import { AbstractService } from '../abstract.service';
    
@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends AbstractService{
  private apiURL = environment.employeeUrl;

  constructor(private httpClient: HttpClient) { super();}

  getAll(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.apiURL + '/findAll')
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  create(employee:Employee): Observable<Employee> {
    return this.httpClient.post<Employee>(this.apiURL + '/add', JSON.stringify(employee), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
    
  find(id:number): Observable<Employee> {
    return this.httpClient.get<Employee>(this.apiURL + '/get-by/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  update(id:number, employee:Employee): Observable<Employee> {
    return this.httpClient.put<Employee>(this.apiURL + '/update/' + id, JSON.stringify(employee), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  delete(id:number){
    return this.httpClient.delete<Employee>(this.apiURL + '/delete/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
     
}
