import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Employe } from '../model/employe';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { UtilisateurService } from '../services/utilisateur.service';
import { Utilisateur } from '../model/Utilisateur';

@Component({
  selector: 'app-employe-list',
  templateUrl: './employe-list.component.html',
  styleUrls: ['./employe-list.component.css']
})
export class EmployeListComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  utilisateurs: Utilisateur[];

  displayedColumns = ['nom', 'prenom', 'dateDeNaissance', 'fonction', 'typeDeContrat', 'dateDebutContrat', 'modifier' , 'supprimer'];
  dataSource = new MatTableDataSource();

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
   this.dataSource.filter = filterValue;
  }

  constructor(private utilisateurService: UtilisateurService) { }

  ngOnInit() {
    this. loadUtilisateur();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  supprimer(id: number) {
    this.utilisateurService.deleteEmploye(id).subscribe(
      () => this.loadUtilisateur()
    )
  }

  loadUtilisateur() {
    this.utilisateurService.getAllUtilisateurs().subscribe(
      data => this.utilisateurs = this.dataSource.data = data
    );
  }

}
