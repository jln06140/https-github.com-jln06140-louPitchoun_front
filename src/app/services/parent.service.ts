import { Injectable } from '@angular/core';
import { Utilisateur } from '../model/Utilisateur';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Parent } from '../model/parent';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ParentService {
  private url = 'http://localhost:8080/api/parent';

  constructor(private http: HttpClient) { }

  public getAllParents(): Observable<Utilisateur[]> {
    return this.http.get(this.url) as Observable<Utilisateur[]>;
  }

  public addParent(parent: Parent): Observable<Parent>{
    return this.http.post<Parent>((this.url), parent, httpOptions);
  }

  public getParent(id: number): Observable<Parent> {
    const url = `${this.url}/${id}`;
    return this.http.get<Parent>(url);
  }

  public updateParent(id: number, parent: Parent): Observable<any> {
    const url = `${this.url}/${id}`;
    console.log(url);
    console.log('parent envoye' + JSON.stringify(parent));
    return this.http.put(url, parent, httpOptions);
  }

  public deleteParent(id: number): Observable<Utilisateur> {
    const url = `${this.url}/${id}`;
    return this.http.delete<Utilisateur>(url, httpOptions);
  }
}
