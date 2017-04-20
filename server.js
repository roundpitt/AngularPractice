var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(8080, function(){
    console.log('Server running on 8080...');
});

/*
Run with Node.js
1. open cmd console
2. cd My Documents\AngularPractice
3. node server.js
*/