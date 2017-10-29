var express = require('express');
var router = express.Router();
var mysql     =require('mysql');
var connection = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"zhao19940801",
    database:"item"
})


/* GET home page. */
router.get('/list', function(req, res, next) {
    connection.query("SELECT id,name FROM baobao",function (err,rows,next) {
        res.header("Access-Control-Allow-Origin","*")
        res.send(rows)
    })
});
router.post('/datail', function(req, res, next) {
    var a = req.body.id
    connection.query("SELECT detail FROM baobao where id=" + a,function (err,rows,next) {
        res.header("Access-Control-Allow-Origin","*");
        if(err) throw err
        res.send(rows)
    })
});

module.exports = router;
