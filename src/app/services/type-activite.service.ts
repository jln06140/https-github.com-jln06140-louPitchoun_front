import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TypeActiviteService {

  private url = 'http://localhost:8080/api/typeActivite';

  constructor(private http : HttpClient) { }

  public getAllTypeActivite(): Observable<any[]> {
    return this.http.get(this.url) as Observable<any[]>;
  }

  // public addUtilisateur(utilisateur: any): Observable<any> {
  //   return this.http.post<any>(this.url, utilisateur, httpOptions);
  // }

  public getTypeActivite(id: number): Observable<any> {
    const url = `${this.url}/${id}`;
    console.log(url);
    return this.http.get<any>(url);
  }

}
