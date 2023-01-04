import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AddprojectServiceService {

  constructor(private _http: HttpClient) { }
  _url = 'http://localhost:8900/allBatches';
  _urlOne = 'http://localhost:8900/allMockInterview';
  getMockInterview(): Observable<any>{
    return this._http.get<any>(this._url);
  }
 
}
