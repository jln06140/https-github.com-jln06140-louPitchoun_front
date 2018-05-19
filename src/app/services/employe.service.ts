import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { Employe } from '../model/employe';
import { Observable } from 'rxjs/Observable';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class EmployeService {
  private url = 'http://localhost:8080/api/employe';

  constructor(private http: HttpClient) { }

  public getAllEmployes(): Observable<Employe[]> {
    return this.http.get(this.url) as Observable<Employe[]>;
  }

  public addEmploye(employe: Employe): Observable<Employe>{
    return this.http.post<Employe>((this.url), employe, httpOptions);
  }

  public getEmploye(id: number): Observable<Employe> {
    const url = `${this.url}/${id}`;
    console.log(url);
    return this.http.get<Employe>(url);
  }

  public updateEmploye(id: number, employe: Employe): Observable<any> {
    const url = `${this.url}/${id}`;
    console.log(url);
    return this.http.put(url, employe, httpOptions);
  }

  public deleteEmploye(id: number): Observable<Employe> {
    const url = `${this.url}/${id}`;
    return this.http.delete<Employe>(url, httpOptions);
  }
}
