import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  Inject
} from '@angular/core';
import {
  MatPaginator,
  MatTableDataSource,
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogConfig,
  MatSnackBar
} from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { UtilisateurService } from '../../../services/utilisateur.service';
import { Utilisateur } from '../../../model/Utilisateur';
import { DialogBodyComponent } from '../../../dialog/dialog-body/dialog-body.component';
import { EnfantService } from '../../../services/enfant.service';
import { PopupAssociateEnfantComponent } from './popup-associate-enfant/popup-associate-enfant.component';

@Component({
  selector: 'app-list-utilisateur',
  templateUrl: './list-utilisateur.component.html',
  styleUrls: ['./list-utilisateur.component.css']
})
export class ListUtilisateurComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  utilisateurs: Utilisateur[];
  displayedColumns = [
    'nom',
    'prenom',
    'email',
    'status',
    'associer',
    'edit',
    'delete'
  ];
  dataSource = new MatTableDataSource();

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  constructor(
    private utilisateurService: UtilisateurService,
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private enfantService: EnfantService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.utilisateurService
      .getAllUtilisateurs()
      .subscribe(
        data => {
          this.utilisateurs = data;
          this.dataSource = new MatTableDataSource(data);
        }
        );
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  isParent(profil: string) {
    return profil === 'PARENT';
  }

  loadAgents() {
    this.utilisateurService
      .getAllUtilisateurs()
      .subscribe(data => (this.utilisateurs = this.dataSource.data = data));
  }

  onDelete(id: number) {
    console.log(id);
    this.utilisateurService.deleteUtilisateur(id).subscribe(
      data => this.loadAgents()
      // () => this.router.navigate(['../'], {relativeTo : this.router})
    );
  }

  openDialog(element: any): void {
    const dialogConfig = new MatDialogConfig();
    const dialogRef = this.dialog.open(PopupAssociateEnfantComponent, {
      width: '600px',
      data: element
    });
    dialogRef.afterClosed().subscribe(result => {
      this.loadAgents();
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000
    });
  }
}
