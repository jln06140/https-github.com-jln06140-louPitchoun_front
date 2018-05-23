import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { JourneeEnfant } from '../model/journeeEnfant';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class JourneeServiceService {

  private url = 'http://localhost:8080/api/journee';
  
  constructor(private http: HttpClient) { }

  public debuterJournee(id: number): Observable<any> {
    const urlDeb = this.url + '/debuter';
    const url = `${urlDeb}/${id}`;
    console.log(url);
    return this.http.get<any>(url) ;
  }

  public cloturerJournee(id: number): Observable<any> {
    const urlClot = this.url + '/cloturer';
    const url = `${urlClot}/${id}`;
    console.log(url);
    return this.http.get<any>(url) ;
  }

  public updateJourneeEncours(id: number ,journeeEnfant: JourneeEnfant){
    const url = `${this.url}/${id}`;
    return this.http.put(url, journeeEnfant, httpOptions);
  }

}
