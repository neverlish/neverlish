var express = require('express')
var router = express.Router()
var path = require('path')
var mysql = require('mysql')

// DATABASE SETTING
var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
	user: 'root',
	database: 'jsman'
})

connection.connect()

router.get('/list', function(req, res) {
  res.render('movie.ejs');
})

router.get('/', function(req, res) {
  var responseData = {};

  var query = connection.query('select title from movie', function(err, rows) {
    if(err) throw err;
    if(rows.length) {
      console.log(rows);
      responseData.result = 1;
      responseData.data = rows;
    } else {
      responseData.result = 0;
    }
    res.json(responseData)
  })
})

module.exports = router;
