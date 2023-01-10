import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GraduateDetailsService {

  constructor(private _http: HttpClient) { }
 
  _url = 'http://localhost:8900/addEmployee';
  _urlOne = 'http://localhost:8900/allEmployees';
  getGrad(): Observable<any>{
    return this._http.get<any>(this._urlOne);
  }
  postGrad(userData: any) {
    console.log(userData);
    return this._http.post<any>(this._url, userData);
  }
  // postGrad(userData: any) {
  //   console.log(userData);
  //   return this._http.post<GradDetails>(this._url, userData);
  // }
}
