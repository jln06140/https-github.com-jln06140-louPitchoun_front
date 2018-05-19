import { Utilisateur } from './Utilisateur';
import { InfoEnfant } from './info-enfant';
import { Parent } from './parent';

export class Enfant {


    constructor(
        public enfantInfo: InfoEnfant,
        public section: string,
        public parents?: Parent[],
        public id?: number
    ) {}


}
