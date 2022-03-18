import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
    
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
   
import { College } from './college';
import { environment } from 'src/environments/environment';
import { AbstractService } from '../abstract.service';
    
@Injectable({
  providedIn: 'root'
})
export class CollegeService extends AbstractService {
  private apiURL = environment.collegeUrl;
  
  constructor(private httpClient: HttpClient) { 
    super();
  }
    
  getAll(): Observable<College[]> {
    return this.httpClient.get<College[]>(this.apiURL + '/findAll')
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  create(college:College): Observable<College> {
    return this.httpClient.post<College>(this.apiURL + '/add', JSON.stringify(college), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
    
  find(id:number): Observable<College> {
    return this.httpClient.get<College>(this.apiURL + '/get-by/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  update(id:number, college:College): Observable<College> {
    return this.httpClient.put<College>(this.apiURL + '/update/' + id, JSON.stringify(college), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  delete(id:number){
    return this.httpClient.delete<College>(this.apiURL + '/delete/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
     
}
