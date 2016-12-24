/**
 * Created by gupta on 12/22/2016.
 */
require('mysql');
var mysql = require("mysql");

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Lenovo@123',
    database : 'website'
});


connection.connect();

connection.query('select * from empolyee', function (err, rows, fields) {
    if (err) throw err;

    console.log('Hello ' + rows[0].name + ', your age is ' + rows[0].age);
});

connection.end();


