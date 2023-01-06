import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ScheduleInterviewService {

  constructor(private _http: HttpClient) { }
 
  _url = 'http://localhost:8900/addInterview';
  _urlOne = 'http://localhost:8900/allInterview';
  getInterview(): Observable<any>{
    return this._http.get<any>(this._urlOne);
  }
  postInterview(userData: any) : Observable<any> {
    console.log("hi " + " " + userData);
    return this._http.post<any>(this._url, userData);
  }

}
