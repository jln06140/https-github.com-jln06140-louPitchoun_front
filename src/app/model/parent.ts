import { Profil } from "./profil";
import { Enfant } from "./enfant";

export class Parent {

        public username: string;
        public motDePasse: string;
        public infoUserDto: any;
        public profil?: Profil;
        public enfants?: Enfant[];
        public id?: number;

    constructor( ) {}
    
}
