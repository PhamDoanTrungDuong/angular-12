import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class HttpGetDataService {
  private REST_API_SERVER = 'http://localhost:3000'
  private RANDOM_USER_API = 'https://randomuser.me/api/?results='
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
     // Authorization: 'my-auth-token'
    })
  };

  constructor(private httpClient: HttpClient) { }

  public getComments(): Observable<any> {
    const url = `${this.REST_API_SERVER}/comments`;
    return this.httpClient.get<any>(url, this.httpOptions);
  }

  public getApiUser(n: number = 1): Observable<any> {
    const url = `${this.RANDOM_USER_API}` + n;
    return this.httpClient.get<any>(url, this.httpOptions);
  }

}
