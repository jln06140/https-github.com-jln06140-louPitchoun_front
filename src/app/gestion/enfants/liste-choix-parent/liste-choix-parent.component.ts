import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { Parent } from '../../../model/parent';
import { ParentService } from '../../../services/parent.service';

@Component({
  selector: 'app-liste-choix-parent',
  templateUrl: './liste-choix-parent.component.html',
  styleUrls: ['./liste-choix-parent.component.css']
})
export class ListeChoixParentComponent implements OnInit{
 
  parent: Parent[];
  displayedColumns = ['select', 'nom', 'prenom', 'email'];
  dataSource = new MatTableDataSource();
  selection = new SelectionModel<Parent>(true, []);


  constructor(private parentService : ParentService){}

  ngOnInit(): void {
    this.parentService.getAllParents().subscribe(
      data => this.parent = this.dataSource.data = data
    )  
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        //this.dataSource.data.forEach(row => this.selection.select(row));
  }
}


