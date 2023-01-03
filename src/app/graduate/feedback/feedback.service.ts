import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Task } from './shared/models/task.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private _http: HttpClient) { }
 
  _url = 'http://localhost:8900/addFeedback';
  _urlOne = 'http://localhost:8900/allFeedback';
  getFeedback(): Observable<any>{
    return this._http.get<any>(this._urlOne);
  }
  register(userData: any) {
    return this._http.post<any>(this._url, userData);
  }
}
