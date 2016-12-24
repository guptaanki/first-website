/**
 * Created by gupta on 12/22/2016.
 */
var express = require('express');
var compiled = require('./blog');

const mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Lenovo@123',
    database : 'website'
});

connection.connect();

var app = express();

app.get('/blog', function (req, resp) {
    resp.send(compiled({
        name: 'My first bloggg',
        created_on: 123456789,
        desc: 'A description of values read by database for my firrrrsttttt blog.',
        author: 'ankita'
    }));
});

app.get("/", function(req, resp) {
    connection.query('SELECT u.name as author, b.created_timestamp as created_on, b.title as name, b.`desc` as description FROM blog b INNER JOIN user u on b.user_id = u.id ORDER BY b.created_timestamp DESC', function(err, rows, fields) {
        if (err) throw err;

        resp.send(compiled({
            name: rows[0].name,
            created_on: rows[0].created_on,
            desc: rows[0].description,
            author: rows[0].author
        }));
    })
});

app.listen(3000, function () {
    console.log('Hello world app listening to port: ' + 3000);
});
