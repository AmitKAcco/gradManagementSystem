import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OnboardingService {

  constructor(private _http: HttpClient) { }
 
  _checkBlockStatus = 'http://localhost:8900/addCheckBlocked';
  _scheduleInterview = 'http://localhost:8900/addInterview';
  
  
  check(empData: any) {
    return this._http.post<any>(this._checkBlockStatus, empData);
  }

  schedule(empData: any) {
    return this._http.post<any>(this._scheduleInterview, empData);
  }

}
