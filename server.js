var express = require('express');
var app = express();

app.set('view engine','pug'); //seteando el pug como gestor de vistas
app.use(express.static('public'));

app.get('/', function(req,res){
	//res.send('Hola mundo!');
	res.render('index'); // por defecto busca en views
});

app.get('/signup', function(req,res){
	res.render('index'); 
});
app.get('/signin', function(req,res){
	res.render('index'); 
});

app.listen(3000, function(err){
	if (err) return console.log('Hubo un error'), process.exit(1);

	console.log('Escuchando en el puerto 3000');
});