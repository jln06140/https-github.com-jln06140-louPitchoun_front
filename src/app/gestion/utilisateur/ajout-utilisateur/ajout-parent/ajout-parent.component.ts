import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UtilisateurService } from '../../../../services/utilisateur.service';
import { CustomValidators } from '../../../../tools/custom-validators';
import { Parent } from '../../../../model/parent';
import { JsonpCallbackContext } from '@angular/common/http';
import { ParentService } from '../../../../services/parent.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout-parent',
  templateUrl: './ajout-parent.component.html',
  styleUrls: ['./ajout-parent.component.css']
})
export class AjoutParentComponent implements OnInit {
  parentForm: FormGroup;
  parentCreated: Parent;

  constructor(
    private parentService: ParentService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private route: Router
  ) {}

  ngOnInit() {
    this.inifForm();
  }

  inifForm() {
    this.parentForm = this.formBuilder.group(
      {
        infoParent: this.formBuilder.group({
          nom: ['', Validators.required],
          prenom: ['', Validators.required],
          adresse: '',
          ville: '',
          email: ['', Validators.email],
          telMobile: [
            '',
            [
              Validators.required,
              Validators.pattern('0[1-68]([-. ]?[0-9]{2}){4}')
            ]
          ],
          telFixe: '',
          telPro: ''
        }),
        motDePasse: ['', Validators.required],
        confMdp: ['', Validators.required]
      },
      { validator: CustomValidators.childrenEqual }
    );
  }

  onSubmitForm() {
    this.parentCreated = new Parent(
      this.email,
      this.parentForm.value['motDePasse'],
      this.parentForm.value['infoParent'],
      'PARENT',
    );
    this.parentService.addParent(this.parentCreated).subscribe(
      () => {
        this.openSnackBar('Succes', 'Utilisateur enregistré');
        this.route.navigate(['/gestion/listeUtilisateur']);
      },
      (err) => { JSON.stringify(err.error.message); this.openSnackBar('error', err.error.message); }
    );
  }

  get email() {
    return this.parentForm.get('infoParent.email').value;
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
