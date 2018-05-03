import { Profil } from './profil';
import { Enfant } from './enfant';

export class Utilisateur {

    constructor(
        public login: string,
        public motDePasse: String,
        public dateDeCreation: Date,
        public parentInfo: any,
        public profil: Profil,
        public enfants?: Enfant[],
        public id?: number
    ) {

    }
}
