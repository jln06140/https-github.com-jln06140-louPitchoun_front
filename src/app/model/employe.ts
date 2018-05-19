import { Login } from './login';
import { InformationEmploye } from './InformationEmploye';

export class Employe {

    constructor(

        public username: string,
        public motDePasse: string,
        public section: string,
        public infoEmploye: InformationEmploye,
        public profil: string,
        public id?: number,
    ) {}
}
