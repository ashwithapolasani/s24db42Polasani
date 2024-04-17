var express = require('express');
var router = express.Router();
const bikes_controlers= require('../controllers/bikes');

const secured = (req, res, next) => {
    if (req.user) {
        return next();
    }
    res.redirect("/login");
}
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('bikes', { title: 'Search Result bikes' });
// });

/* GET bikes */
router.get('/', bikes_controlers.bikes_view_all_Page );
/* GET detail bikes page */
router.get('/detail', bikes_controlers.bikes_view_one_Page);
/* GET create bikes page */
router.get('/create', secured, bikes_controlers.bikes_create_Page)

/* GET create update page */
router.get('/update', secured, bikes_controlers.bikes_update_Page);

/* GET delete costume page */
router.get('/delete', secured, bikes_controlers.bikes_delete_Page);



module.exports = router;