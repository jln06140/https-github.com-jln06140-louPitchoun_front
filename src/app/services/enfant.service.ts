import { Injectable } from '@angular/core';

import { Enfant } from '../model/enfant';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class EnfantService {
  private url = 'http://localhost:8080/api/enfant';

  constructor(private http: HttpClient) { }

  public getAllEnfants(): Observable<Enfant[]> {
    return this.http.get(this.url) as Observable<Enfant[]>;
  }

  public addEnfant(enfant: Enfant): Observable<Enfant> {
    return this.http.post<Enfant>((this.url), enfant, httpOptions);
  }

  public getEnfant(id: number): Observable<Enfant> {
    const url = `${this.url}/${id}`;
    return this.http.get<Enfant>(url);
  }

  public updateEnfant(id: number, enfant: Enfant): Observable<any> {
    const url = `${this.url}/${id}`;
    console.log(url);
    console.log(JSON.stringify(enfant));
    return this.http.put(url, enfant, httpOptions);
  }

  public deleteEnfant(id: number): Observable<Enfant> {
    const url = `${this.url}/${id}`;
    return this.http.delete<Enfant>(url, httpOptions);
  }

  public loadEnfants(variable : any[]){
    this.getAllEnfants().subscribe(
      data => {variable = data;
      console.log(data);}
    )
  }

  //public getEnfantsBySection(String nomSection)
}