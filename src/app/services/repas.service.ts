import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class RepasService {

  private url = 'http://localhost:8080/api/repas';

  constructor(private http: HttpClient) { }

  public ajoutRepasDansJournee(id: number ,repas: any){
    const urlAjout = this.url + '/ajoutrepas'
    const url = `${urlAjout}/${id}`;
    return this.http.post(url, repas, httpOptions);
  }

}
