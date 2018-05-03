import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InformationParent } from '../model/informationParent';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class InformationService {

  constructor(private http: HttpClient) { }

  private url = 'http://localhost:8080/api/information';

  public addInformationsParent(informations: InformationParent): Observable<InformationParent>{
    const url = this.url + '/parent';
    console.log(url);
    return this.http.post<InformationParent>(this.url, informations, httpOptions);
  }

}
