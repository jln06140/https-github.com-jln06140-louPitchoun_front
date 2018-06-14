import { Component, OnInit, ViewChild, AfterViewInit, Inject } from '@angular/core';
import { MatPaginator, MatTableDataSource, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Enfant } from '../../../../model/enfant';
import { EnfantService } from '../../../../services/enfant.service';
import { Parent } from '../../../../model/parent';
import { ParentService } from '../../../../services/parent.service';
import { SnackBarService } from '../../../../services/snack-bar.service';

@Component({
  selector: 'app-popup-associate-enfant',
  templateUrl: './popup-associate-enfant.component.html',
  styleUrls: ['./popup-associate-enfant.component.css']
})
export class PopupAssociateEnfantComponent implements OnInit ,AfterViewInit{
  @ViewChild(MatPaginator) paginator: MatPaginator;

  parent: Parent;
  enfantsAjoutes = new Array<Enfant>();
  enfants: Enfant[];
  enfantsDuParent: Enfant[];
  displayedColumns = ['nom', 'prenom', 'section', 'associer'];
  dataSource = new MatTableDataSource();

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
   this.dataSource.filter = filterValue;
  }

  constructor(
    public enfantService: EnfantService,
    public parentService: ParentService,
    private snackBarService: SnackBarService,
    public dialogRef: MatDialogRef<PopupAssociateEnfantComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.parent = data;
      this.parent.infoParent = data.infoUserDto;
    }

  ngOnInit() {
    this.enfantsDuParent = this.parent.enfants;
    console.log(this.enfants);
    this.enfantService.getAllEnfants().subscribe(
      data => {
        this.enfants =  data;
        this.dataSource = new MatTableDataSource(data);
      }
    );
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ajouter(element: Enfant) {
    this.enfantsDuParent.push(element);
    console.log(this.enfantsDuParent);
  }

  enlever(element: Enfant) {
    this.enfantsDuParent = this.enfantsDuParent.filter(item => item.id !== element.id);
    console.log(this.enfantsDuParent);
  }

  elementDansArray(element: any): boolean {
    let isPresent = false;
    if (this.enfantsDuParent.find( x => x.id === element.id)) {
      isPresent =  true;
    }
    return isPresent;
  }

  associer() {
    this.parentService.ajoutEnfantsParent(this.parent.id, this.enfantsDuParent).subscribe(
      (data) => {
        this.snackBarService.openSnackBar('Enfant associé', 'Succes');
        this.close();
    }
    );
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


  close() {
    // this.parent.enfants = this.enfantsAjoutes;
    // this.parentService.updateParent(this.parent.id, this.parent).subscribe(
    //   () => console.log("coucou")
    // );
    this.dialogRef.close(this.enfantsDuParent);
  }


}
