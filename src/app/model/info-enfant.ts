export class InfoEnfant {
  constructor(
    public nom: string,
    public prenom: string,
    public dateDeNaissance: Date,
    public allergie: boolean,
    public maladie: boolean,
    public biberon: boolean,
    public id?: number
  ) {}
}
