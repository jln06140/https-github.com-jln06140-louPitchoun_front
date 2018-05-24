import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JourneeEnfant } from '../model/journeeEnfant';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ActiviteService {

  private url = 'http://localhost:8080/api/activite';

  constructor(private http: HttpClient) { }

  public ajoutActiviteDansJournee(id: number ,activite: any){
    const url = `${this.url}/${id}`;
    return this.http.post(url, activite, httpOptions);
  }

}
