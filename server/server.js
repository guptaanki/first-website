/**
 * Created by gupta on 12/22/2016.
 */
var http = require('http');
var mysql = require("mysql");

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Lenovo@123',
    database : 'website'
});

connection.connect();

http.createServer(function(req, res) {
    connection.query('select * from empolyee', function (err, rows, fields) {
        if (err) throw err;

        console.log('Hello ' + rows[0].name + ', your age is ' + rows[0].age);

        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.write('<!doctype html>\n<html lang="en">\n' +
            '\n<meta charset="utf-8">\n<title>Test web page on node.js</title>\n' +
            '<style type="text/css">* {font-family:arial, sans-serif;}</style>\n' +
            '\n\n<h1>Euro 2012 teams</h1>\n' + '<h3>' + rows[0].name +'</h3>\n' +
            '<div id="content"><p>The teams in Group D for Euro 2012 are:</p><ul><li>England</li><li>France</li><li>Sweden</li><li>Ukraine</li></ul></div>' +
            '\n\n');
        res.end();
    });
}).listen(8888, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8888');