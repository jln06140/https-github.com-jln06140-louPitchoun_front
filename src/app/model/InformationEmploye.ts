export class InformationEmploye {

    constructor(
        public nom: string,
        public prenom: string,
        public email: string,
        public adresse: string,
        public ville: string,
        public telMobile: string,
        public fonction: string,
        public typeContrat: string,
        public dateEmbauche?: string,
        public id?: number

    ) {}

}
