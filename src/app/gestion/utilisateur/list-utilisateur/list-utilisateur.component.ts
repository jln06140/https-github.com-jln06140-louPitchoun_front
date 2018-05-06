import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { UtilisateurService } from '../../../services/utilisateur.service';
import { Utilisateur } from '../../../model/Utilisateur';

@Component({
  selector: 'app-list-utilisateur',
  templateUrl: './list-utilisateur.component.html',
  styleUrls: ['./list-utilisateur.component.css']
})
export class ListUtilisateurComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  utilisateurs: Utilisateur[];
  displayedColumns = ['nom', 'prenom', 'email', 'status', 'associer', 'edit', 'delete'];
  dataSource = new MatTableDataSource();

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
   this.dataSource.filter = filterValue;
  }

  constructor(private utilisateurService: UtilisateurService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.utilisateurService.getAllUtilisateurs().subscribe(
      data => this.utilisateurs = this.dataSource.data = data
    );
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  isParent(profil: string){
    return profil === 'PARENT';
  }

  loadAgents(){
    this.utilisateurService.getAllUtilisateurs().subscribe(
      data => this.utilisateurs = this.dataSource.data = data
    );
  }

  // onDelete(id: number) {
  //   console.log(id);
  //   this.agentService.deleteAgent(id).subscribe(
  //     data => this.loadAgents()
  //      // () => this.router.navigate(['../'], {relativeTo : this.router})
  //   );
  // }
}
