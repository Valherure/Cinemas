var peliculacontroller= require('./peliculacontroller.js');
module.exports=function(app) {
	var clasepelicula= new peliculacontroller();
	var controllerAdministrador = require('./controlleradministrador.js');      
var claseadm = new controllerAdministrador();
	app.post('/api/Nuevapelicula',clasepelicula.Guardar);
	app.post('/api/Modificapelicula',clasepelicula.Modificar);
	app.post('/api/Eliminapelicula',clasepelicula.Eliminar);
	app.post('/api/seleccionarpelicula',clasepelicula.Seleccionartodos);
	app.post('/api/seleccionarporfecha',clasepelicula.Seleccionarporfecha);
	app.post('/api/seleccionarporid',clasepelicula.Seleccionarporid);
	app.post('/api/seleccionarpornombre',clasepelicula.Seleccionarpornombre);
	app.post('/api/nuevoadm',claseadm.Guardar);
    app.post('/api/loginadm',claseadm.Login);

	app.get('*',function(req,res){
		//localhost:8080
		res.sendfile('/.login.html');//carga única de la vista
	});
};