import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Profil } from '../model/profil';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ProfilService {

  constructor(private http: HttpClient) { }

  private url: 'http://localhost:8080/api/profil';

  public getprofilByLibelle(libelle: string): Observable<Profil> {
    const url = 'http://localhost:8080/api/profil/' + libelle;
    return this.http.get<Profil>(url);
  }
}
