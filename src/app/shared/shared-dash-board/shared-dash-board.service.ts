import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SharedDashBoardService {

  constructor(private http : HttpClient) { }
  _url = 'http://localhost:8900/addApproval';
  _urlGetAllTopics = 'http://localhost:8900/allTopics';
}
