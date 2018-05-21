import { Utilisateur } from './Utilisateur';
import { InfoEnfant } from './info-enfant';
import { Parent } from './parent';
import { JourneeEnfant } from './journeeEnfant';

export class Enfant {


    constructor(
        public enfantInfo: InfoEnfant,
        public section: string,
        public parents?: Parent[],
        public journees? : JourneeEnfant[],
        public id?: number
    ) {}


}
