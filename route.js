var peliculacontroller= require('./peliculacontroller.js');
module.exports=function(app) {
	var clasepelicula= new peliculacontroller();
	app.post('/api/Nuevapelicula',clasepelicula.Guardar);
	app.post('/api/Modificapelicula',clasepelicula.Modificar);
	app.post('/api/Eliminapelicula',clasepelicula.Eliminar);
	app.post('/api/seleccionarpelicula',clasepelicula.Seleccionartodos);
	app.post('/api/seleccionarporfecha',clasepelicula.Seleccionarporfecha);
	app.post('/api/seleccionarporid',clasepelicula.Seleccionarporid);
	app.post('/api/seleccionarpornombre',clasepelicula.Seleccionarpornombre);	

	app.get('*',function(req,res){
		//localhost:8080
		res.sendfile('/.login.html');//carga única de la vista
	});
};