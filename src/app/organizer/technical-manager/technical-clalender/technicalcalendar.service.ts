import { Injectable } from '@angular/core';
import { Observable } from 'rxjs-compat';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TechnicalcalendarService {

  constructor(private _http: HttpClient) { }
 
  _url = 'http://localhost:8900/addTrainingCalendar';
  _urlOne = 'http://localhost:8900/allTrainingCalendar';
  getCalendar(): Observable<any>{
    return this._http.get<any>(this._urlOne);
  }
  postCalendar(userData: any) {
    console.log(userData);
    return this._http.post<any>(this._url, userData);
  }
}
