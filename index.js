//require modules
const express = require('express');
const mysql = require('mysql');

// database
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'mydb'
  });

connection.connect((err) => {

if (err) console.log('Error: ' + err.stack)
else console.log('Connected to MySQL Database!')
});

//create app
const app = express();

//configure app
let port = 3000;
let host = 'localhost';
let url = 'localhost';

//set up routes
app.get('/', (req, res)=>{
    result = connection.query('SELECT * FROM Customers', (err, results) => {
        if (err) console.log("Error: " + err.stack)
        else res.json(results)
    })
});

// start server
app.listen(port, host, ()=> {
    console.log('Server us running in port', port)
})