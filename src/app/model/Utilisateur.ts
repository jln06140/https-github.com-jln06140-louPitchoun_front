import { Profil } from './profil';
import { Enfant } from './enfant';

export class Utilisateur {

    constructor(
        public username: string,
        public motDePasse: String,
        public infoUserDto: any,
        public profil: Profil,
        public enfants?: Enfant[],
        public id?: number
    ) {

    }
}
