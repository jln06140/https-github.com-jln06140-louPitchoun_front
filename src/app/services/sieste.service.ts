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

  public debuterSieste (idEnfant: number): Observable<any>{
    const urlDebSieste = this.url + "/demarrerSieste";
    const url = `${urlDebSieste}/${idEnfant}`;
    return this.http.get<any>(url);
  }
  
}
