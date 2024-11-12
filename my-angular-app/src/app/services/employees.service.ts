import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { IEmployee } from '../models/IEmployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private httpClient: HttpClient) { }
  
  // get the Empoyees
  public getAllEmployees(): Observable<IEmployee[]>{
    let dataUrl: string =`https://gist.githubusercontent.com/VenkataswamyPulicherla/2408c726e582c2867b52a75d8c41f431/raw/f4a125463338378b3dcb0a5a216d23867d183842/name10_6_2024`
    return this.httpClient.get<IEmployee[]>(dataUrl).pipe(
      retry(1)
    )
  }
}
