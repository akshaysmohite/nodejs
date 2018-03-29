var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    req.getConnection(function(error, conn) {
        conn.query('SELECT * FROM users ORDER BY id DESC',function(err, rows, fields) {
            res.render('index', { title: 'User Listing',result:rows });
        });
    });

});

router.get('/add', function(req, res, next) {
  res.render('add', { title: 'Add User' });
});

module.exports = router;
