import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Profil } from '../model/profil';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ProfilService implements OnInit{

  
  constructor(private http: HttpClient)  {}

  private url: 'http://localhost:8080/api/profil';

  listeProfils: string[] = null;

  ngOnInit() {
    console.log("passage dans initProfil");
    this.loadProfils();
  }

  public getprofilByLibelle(libelle: string): Observable<Profil> {
    const url = 'http://localhost:8080/api/profil/' + libelle;
    return this.http.get<Profil>(url);
  }

  public getAllLibelleProfils(): Observable<string[]> {
    return this.http.get<any>(this.url);
  }

  public loadProfils() : string[]{
    if(this.listeProfils === null){
      this.getAllLibelleProfils().subscribe(
        data => this.listeProfils = data
      );
    }

      return this.listeProfils;
  }

}
