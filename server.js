var restify = require('restify'),
    heros = require('./controllers/heros'),
    port = 3000;

var server = restify.createServer({
    name: 'cross s garden',
    version: '1.0.0'
});

server.use(function name(req, res, next) {
    console.log(req.method + '  ' + req.url);
    return next();
})

server.use(restify.queryParser());
server.use(restify.bodyParser());

// test
server.get('/', function(req, res, next) {
    res.send('test:hello!');
})

// heros
server.get('api/heros', heros.query);

server.listen(port, function() {
    console.log('port is ' + port);
});