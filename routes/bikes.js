var express = require('express');
var router = express.Router();
 
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('bikes', { title: 'Search Result bikes' });
});
module.exports = router;

var express = require('express');
const bikes_controllers= require('../controllers/bikes');
var router = express.Router();
/* GET bikes */
router.get('/', bikes_controllers.bikes_view_all_Page );
module.exports = router;