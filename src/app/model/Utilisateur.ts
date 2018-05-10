import { Profil } from './profil';
import { Enfant } from './enfant';

export class Utilisateur {

    constructor(
        public username: string,
        public motDePasse: string,
        public infoUserDto: any,
        public profil: string,
        public enfants?: Enfant[],
        public id?: number
    ) {}

    isParent() {
        return this.profil === 'PARENT';
    }

    isEmploye() {
        return this.profil === 'EMPLOYE';
    }

    isAdmin() {
        return this.profil === 'ADMIN';
    }
}
