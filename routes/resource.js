var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var bikes_controller = require('../controllers/bikes');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// bikes ROUTES ///
// POST request for creating a bikes. 
router.post('/bikes', bikes_controller.bikes_create_post);
// DELETE request to delete bikes.
router.delete('/bikes/:id', bikes_controller.bikes_delete);
// PUT request to update bikes.
router.put('/bikes/:id', bikes_controller.bikes_update_put);
// GET request for one bikes.
router.get('/bikes/:id', bikes_controller.bikes_detail);
// GET request for list of all bikes items.
router.get('/bikes', bikes_controller.bikes_list);
module.exports = router;