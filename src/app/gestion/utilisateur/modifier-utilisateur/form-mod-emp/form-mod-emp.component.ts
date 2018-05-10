import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { CustomValidators } from '../../../../tools/custom-validators';
import { Utilisateur } from '../../../../model/Utilisateur';
import { Employe } from '../../../../model/employe';
import { UtilisateurService } from '../../../../services/utilisateur.service';
import { EmployeService } from '../../../../services/employe.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ProfilEnum } from '../../../../enum/profil-enum.enum';

@Component({
  selector: 'app-form-mod-emp',
  templateUrl: './form-mod-emp.component.html',
  styleUrls: ['./form-mod-emp.component.css']
})
export class FormModEmpComponent implements OnInit {
  @Input() employe: Utilisateur;
  lecture: boolean;
  profilEnum = ProfilEnum;
  prof: string;


  employeToUpdate: Employe;
  motDePasse: any;
  confirmation: string;

 employetModForm: NgForm;

  constructor(
    private formBuilder: FormBuilder,
    private employeService: EmployeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.lecture = true;
    this.UtilisateurToParent();
  }

  keys() : Array<string> {
    const keys = Object.keys(this.profilEnum);
    return keys.slice(keys.length / 2);
}

  onModification() {
    this.lecture = this.lecture === true ? false : true;
  }

  getInfo() {
    return this.employeToUpdate.infoEmploye;
  }

  UtilisateurToParent() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = +params.get('id');
      this.employeService
        .getEmploye(id)
        .subscribe(data => (this.employeToUpdate = data));
    });
  }

  onSubmitForm(form: NgForm) {
    if (form.valid) {
      if (this.motDePasse != null) {
        this.employeToUpdate.motDePasse = this.motDePasse;
      }
      console.log(JSON.stringify(form.value));
      this.employeService
        .updateEmploye(this.employeToUpdate.id, this.employeToUpdate)
        .subscribe(data => this.router.navigate(['../']));
    }
  }

}
