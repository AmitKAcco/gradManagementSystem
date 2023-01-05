import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject,Observable , BehaviorSubject} from 'rxjs';
import { Task } from './graduate/feedback/shared/models/task.model';
@Injectable({
  providedIn: 'root'
})
 export class GlobalService {

  batchEmitter = new BehaviorSubject<any>(-1);
  newVal = new Subject<any>();
  constructor(private _http: HttpClient) { }
  _url = 'http://localhost:8900/addApproval';
  _urlOne = 'http://localhost:8900/allTopics';
  _urlTwo = 'http://localhost:8900/allApproval';
  _urlThree = 'localhost:8900/trainingCurriculumByBatchId/1';

  getApproval(batch: any): Observable<any> {
    let urlx = `http://localhost:8900/approval/${batch}`;
    return this._http.get< any >(urlx);  
  }

  getUser(username: any): Observable<any> {
    let urlx = `http://localhost:8900/trainingCurriculumByBatchId/${username}`;
    return this._http.get< any >(urlx);  
  }

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

  emitBatchId(batchid : any){
    this.batchEmitter.next(batchid);
  }
}
