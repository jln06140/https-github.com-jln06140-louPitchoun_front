export class JourneeEnfant{

    constructor(
        public date: Date,
		public  heureArrivee: Date,
		public  heureDepart: Date,
		public remarque: string,
		public journeeEnCours: boolean;
	){}
}