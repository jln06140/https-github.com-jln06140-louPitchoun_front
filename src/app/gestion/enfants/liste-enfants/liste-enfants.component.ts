import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { EnfantService } from '../../../services/enfant.service';
import { Enfant } from '../../../model/enfant';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-liste-enfants',
  templateUrl: './liste-enfants.component.html',
  styleUrls: ['./liste-enfants.component.css']
})
export class ListeEnfantsComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  enfants: Enfant[];
  displayedColumns = ['nom', 'prenom', 'section', 'edit', 'delete'];
  dataSource = new MatTableDataSource();

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
   this.dataSource.filter = filterValue;
  }

  constructor(private enfantService: EnfantService, 
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.enfantService.getAllEnfants().subscribe(
      data => this.enfants = this.dataSource.data = data
    );
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  loadEnfants() {
    this.enfantService.getAllEnfants().subscribe(
      data => this.enfants = this.dataSource.data = data
    );
  }

  onDelete(id: number) {
    console.log(id);
    this.enfantService.deleteEnfant(id).subscribe(
      data => this.loadEnfants()
       // () => this.router.navigate(['../'], {relativeTo : this.router})
    );
  }
}
