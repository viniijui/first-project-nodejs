//chamando o express
var app = require('./app/config/express')();
var routes = require('./app/routes/productRoutes')(app);

//rota
app.get('/', function(req, res) {
	res.send("<html><head><title>test</title><head><body><h1>First project</h1></body></html>");
	console.log('aqui');
});

//criando o servidor e escutando na porta 3000
app.listen(3000, function() {
	console.log('servidor rodando');
});