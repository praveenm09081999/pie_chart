var express = require('express');
var app = express();
var cors = require('cors');


app.use(cors({
  'allowedHeaders': ['Content-Type'], // headers that React is sending to the API
  'exposedHeaders': ['Content-Type'], // headers that you are sending back to React
  'origin': '*',
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
  'preflightContinue': false
}));

app.get('/', function (req, res) {
   var params = req.params
   res.send(messageObj);
})


var mysql = require('mysql');

var messageObj = {}
var con = mysql.createConnection({
  host: "sql6.freemysqlhosting.net",
  user: "sql6503109",
  password: "hMygc9S5Hl",
  database: "sql6503109"
});

function connectDatabase(){
con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM `TABLE 1`", function (err, result) {
    if (err) throw err;

    messageObj.webLen = result
  });
  con.query("SELECT * FROM `TABLE 2` LIMIT 243", function (err, result) {
    if (err) throw err;

    messageObj.facebookLen = result
  });

  con.query("SELECT * FROM `TABLE 3` LIMIT 496", function (err, result,) {
    if (err) throw err;

    messageObj.redditLen = result
  });

  con.query("SELECT * FROM `TABLE 4` LIMIT 511", function (err, result) {
    if (err) throw err;
 
    messageObj.instagramLen = result
  });

  con.query("SELECT * FROM `TABLE 5` LIMIT 412", function (err, result) {
    if (err) throw err;

    messageObj.twitterLen = result
  });
});
}

var timeout = setInterval(()=>{
    if (Object.keys(messageObj).length >=5) {
    con.end()
    clearInterval(timeout)
}
},1)

connectDatabase()
const PORT = process.env.PORT || 8081;
  
app.listen(PORT, console.log(`Server started on port ${PORT}`));