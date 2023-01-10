import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class BatchService {
  constructor(private _http: HttpClient) { }
 

  _url = 'http://localhost:8900/addBatch';
  _urlOne = 'http://localhost:8900/allBatches';
  getBatch(): Observable<any>{
    return this._http.get<any>(this._urlOne);
  }
  postBatch(userData: any) {
    console.log(userData);
    return this._http.post<any>(this._url, userData);
  }
  // postBatch(userData: any) {
  //   console.log(userData);
  //   return this._http.post<Batch>(this._url, userData);
  // }
}
