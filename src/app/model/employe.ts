import { Login } from './login';

export class Employe {

    constructor(
        public id: number,
        public nom: string,
        public prenom: string,
        public dateDeNaissance: Date,
        public fonction: string,
        public grade: string,
        public dateDebutContrat: Date,
        public typeContrat: string,
        public login: Login
    ) {}
}
