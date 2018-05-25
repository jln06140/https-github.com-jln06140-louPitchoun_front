import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SiesteService {

  private url = 'http://localhost:8080/api/sieste';

  constructor(private http: HttpClient) { }

  public ajouterSieste (idJournee: number, sieste: any): Observable<any>{
    const urlDebSieste = this.url + "/ajoutsieste";
    const url = `${urlDebSieste}/${idJournee}`;
    return this.http.post<any>(url,sieste,httpOptions);
  }
  
}
