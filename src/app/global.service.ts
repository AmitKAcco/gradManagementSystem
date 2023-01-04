import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject,Observable } from 'rxjs';
import { Task } from './graduate/feedback/shared/models/task.model';
@Injectable({
  providedIn: 'root'
})
export class GlobalService {


  
  constructor(private _http: HttpClient) { }
 
  _url = 'http://localhost:8900/addApproval';
  _urlOne = 'http://localhost:8900/allTopics';
  _urlTwo = 'http://localhost:8900/allApproval';
  getTopic(): Observable<any>{
    return this._http.get<any>(this._urlOne);
  }
  postTopic(userData: any) {
    console.log(userData);
    return this._http.post<any>(this._url, userData);
  }
}
