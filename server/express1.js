/**
 * Created by gupta on 12/22/2016.
 */
var express = require('express');
var app = express();

app.get("/", function (request, response) {
    response.send('Hello, world');
});

app.get("/blog", function (req, resp) {
   resp.send("building response from mysql");
});

app.listen(3000, function () {
   console.log('Hello world app listening to port: ' + 3000);
});
