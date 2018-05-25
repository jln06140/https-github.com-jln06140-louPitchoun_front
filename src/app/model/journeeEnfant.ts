export class JourneeEnfant{

    constructor(
		public date: Date,
		public remarque: string,
		public typeActivite: any,
		public  heureArrivee?: any,
		public  heureDepart?: any,
		public journeeEnCours?: boolean
	){}
}