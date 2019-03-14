var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var pelicula= new Schema({ //declarar objetos
	NOMBRE: String,
	DURACIONENMINUTOS: Number,
	GENERO: String,
	IDIOMAAUDIO: String,
	IDIOMASUB: String,
	SINOPSIS: String,
	CLASIFICACION: String,
	PRECIO: Number,
	HORAINICIO: Number,
	FECHA: Date,
	MINUTODEINICIO: Number,
	ASIENTOS: {
		A1:{ //objetos con mismas caracteristicas
			NOBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number
		},
		A2:{
			NOBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number
		},
		A3:{
			NOBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number
		},
		A4:{
			NOBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number
		},
		A5:{
			NOBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number
		},
		A6:{
			NOBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number
		},
		B1:{
			NOBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number
		},
		B2:{
			NOBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number
		},
		B3:{
			NOBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number
		},
		B4:{
			NOBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number
		},
		B5:{
			NOBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number
		},
		B6:{
			NOBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number
		},
		C1:{
			NOBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number
		},
		C2:{
			NOBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number
		},
		C3:{
			NOBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number
		},
		C4:{
			NOBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number
		},
		C5:{
			NOBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number
		},
		C6:{
			NOBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number
		},
		D1:{
			NOBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number
		},
		D2:{
			NOBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number
		},
		D3:{
			NOBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number
		},
		D4:{
			NOBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number
		},
		D5:{
			NOBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number
		},
		E1:{
			NOBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number
		},
		E2:{
			NOBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number
		},
		E3:{
			NOBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number
		},
		E4:{
			NOBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number
		},
		F1:{
			NOBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number
		},
		F2:{
			NOBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number
		},
		F3:{
			NOBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number
		},
		F4:{
			NOBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number
		},
		G1:{
			NOBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number
		},
		G2:{
			NOBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number
		},
		G3:{
			NOBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number
		},
		G4:{
			NOBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number
		},
		H1:{
			NOBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number
		},
		H2:{
			NOBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number
		},
		H3:{
			NOBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number
		},
		H4:{
			NOBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number
		}},
		IMAGEN: String,
		ESTADO: Number
});
module.exports=mongoose.model('pelicula',pelicula);