import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
    
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
   
import { Department } from './department';
import { environment } from 'src/environments/environment';
import { AbstractService } from '../abstract.service';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService extends AbstractService{

  private apiURL = environment.departmentUrl;
    
  constructor(private httpClient: HttpClient) { super();}
    
  getAll(): Observable<Department[]> {
    return this.httpClient.get<Department[]>(this.apiURL + '/findAll')
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  create(department:Department): Observable<Department> {
    return this.httpClient.post<Department>(this.apiURL + '/add', JSON.stringify(department), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
    
  find(id:number): Observable<Department> {
    return this.httpClient.get<Department>(this.apiURL + '/get-by/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  update(id:number, department:Department): Observable<Department> {
    return this.httpClient.put<Department>(this.apiURL + '/update/' + id, JSON.stringify(department), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  delete(id:number){
    return this.httpClient.delete<Department>(this.apiURL + '/delete/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
     
}
