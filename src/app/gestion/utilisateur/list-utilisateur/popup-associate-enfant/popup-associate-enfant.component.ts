import { Component, OnInit, ViewChild, AfterViewInit, Inject } from '@angular/core';
import { MatPaginator, MatTableDataSource, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Enfant } from '../../../../model/enfant';
import { EnfantService } from '../../../../services/enfant.service';
import { Parent } from '../../../../model/parent';
import { ParentService } from '../../../../services/parent.service';

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
    public dialogRef: MatDialogRef<PopupAssociateEnfantComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.parent = data;
      this.parent.infoParent = data.infoUserDto;
    }

  ngOnInit() {
    this.enfantService.getAllEnfants().subscribe(
      data => this.enfants = this.dataSource.data = data
    );
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ajouter(element: Enfant) {
    console.log(element);
    this.enfantsAjoutes.push(element);
    console.log(this.enfantsAjoutes);
  }

  enlever(element: Enfant) {
    this.enfantsAjoutes = this.enfantsAjoutes.filter(item => item !== element);
    console.log(this.enfantsAjoutes);
  }

  elementDansArray(element: any): boolean{
    let isPresent = false;
    if (this.enfantsAjoutes.find( x => x.id === element.id)){
      isPresent =  true;
    }
    return isPresent;
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
    this.parent.enfants = this.enfantsAjoutes;
    this.parentService.updateParent(this.parent.id, this.parent).subscribe(
      () => console.log("coucou")
    );
    this.dialogRef.close(this.enfantsAjoutes);
  }

  
}
