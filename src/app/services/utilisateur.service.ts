import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Employe } from '../model/employe';
import { Subject } from 'rxjs/Subject';
import { Utilisateur } from '../model/Utilisateur';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UtilisateurService {

  private url = 'http://localhost:8080/api/utilisateur';

  constructor(private http: HttpClient) { }

  public getAllUtilisateurs(): Observable<Utilisateur[]> {
    return this.http.get(this.url) as Observable<Utilisateur[]>;
  }

  public addUtilisateur(utilisateur: Utilisateur): Observable<Utilisateur>{
    return this.http.post<Utilisateur>((this.url), utilisateur, httpOptions);
  }

  public getUtilisateur(id: number): Observable<Utilisateur> {
    const url = `${this.url}/${id}`;
    console.log(url);
    return this.http.get<Utilisateur>(url);
  }

  public updateUtilisateur(id: number, utilisateur: Utilisateur): Observable<any> {
    const url = `${this.url}/${id}`;
    return this.http.put(url, utilisateur, httpOptions);
  }

  public deleteUtilisateur(id: number): Observable<Utilisateur> {
    const url = `${this.url}/${id}`;
    return this.http.delete<Utilisateur>(url, httpOptions);
  }
}

