import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Employe } from '../../../../model/employe';
import { EmployeService } from '../../../../services/employe.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { CustomValidators } from '../../../../tools/custom-validators';

@Component({
  selector: 'app-ajout-employe',
  templateUrl: './ajout-employe.component.html',
  styleUrls: ['./ajout-employe.component.css']
})
export class AjoutEmployeComponent implements OnInit {
  employeForm: FormGroup;
  employeCreated: Employe;
  sectionList: string[];
  sectionDefault: string;

  constructor(
    private employeService: EmployeService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private route: Router
  ) {}

  ngOnInit() {
    this.sectionList = ['Petit', 'Moyen', 'Grand'];
    this.sectionDefault = this.sectionList[1];
    this.inifForm();
  }

  inifForm() {
    this.employeForm = this.formBuilder.group(
      {
        section: '',
        infoEmploye: this.formBuilder.group({
          matricule: ['', Validators.required],
          nom: ['', Validators.required],
          prenom: ['', Validators.required],
          email: ['', Validators.email],
          telMobile: [
            '',
            [
              Validators.required,
              Validators.pattern('0[1-68]([-. ]?[0-9]{2}){4}')
            ]
          ],
        }),
        motDePasse: ['', Validators.required],
        confMdp: ['', Validators.required]
      },
      //{ validator: CustomValidators.childrenEqual }
    );
  }

  onSubmitForm() {
    this.employeCreated = new Employe(
      this.matricule,
      this.employeForm.value['motDePasse'],
      this.employeForm.value['section'],
      this.employeForm.value['infoEmploye'],
      'EMPLOYE',
    );
    this.employeService.addEmploye(this.employeCreated).subscribe(
      () => {
        this.openSnackBar('Succes', 'Utilisateur enregistré');
        this.route.navigate(['/gestion/listeUtilisateur']);
      },
      (err) => { JSON.stringify(err.error.message); this.openSnackBar('error', err.error.message); }
    );
  }

  get matricule() {
    return this.employeForm.get('infoEmploye.matricule').value;
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
