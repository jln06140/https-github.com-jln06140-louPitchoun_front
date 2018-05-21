import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class JourneeServiceService {

  private url = 'http://localhost:8080/api/journee';
  
  constructor(private http: HttpClient) { }

  public debuterJournee(id: number): Observable<any> {
    const urlStart = this.url + '/start';
    const url = `${urlStart}/${id}`;
    console.log(url);
    return this.http.get<any>(url) ;
  }

}
