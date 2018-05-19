import { Profil } from "./profil";
import { Enfant } from "./enfant";

export class Parent {

        

    constructor(
        public username: string,
        public motDePasse: string,
        public infoParent: any,
        public profil?: Profil,
        public enfants?: Enfant[],
        public id?: number
     ) {}
    
}
