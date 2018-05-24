export class JourneeEnfant{

    constructor(
		public date: Date,
		public remarque: string,
		public typeActivite: any,
		public  heureArrivee?: Date,
		public  heureDepart?: Date,
		public journeeEnCours?: boolean
	){}
}