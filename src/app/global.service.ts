import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject,Observable } from 'rxjs';
import { Task } from './graduate/feedback/shared/models/task.model';
@Injectable({
  providedIn: 'root'
})
 export class GlobalService {

   
  newVal = new Subject<any>();
  constructor(private _http: HttpClient) { }
  _url = 'http://localhost:8900/addApproval';
  _urlOne = 'http://localhost:8900/allTopics';
  _urlTwo = 'http://localhost:8900/allApproval';
  _urlThree = 'localhost:8900/trainingCurriculumByBatchId/1';
  getTopic(): Observable<any>{
    return this._http.get<any>(this._urlOne);
  }
  getTopicid(): Observable<any>{
    return this._http.get<any>(this._urlThree);
  }
  postApproval(userData: any) {
    console.log(userData);
    return this._http.post<any>(this._url, userData);
  }
}
