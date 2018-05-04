import { Profil } from './profil';
import { Enfant } from './enfant';

export class Utilisateur {

    constructor(
        public login: string,
        public motDePasse: String,
        public createdDate: Date,
        public info: any,
        public profil: Profil,
        public enfants?: Enfant[],
        public id?: number
    ) {

    }
}
