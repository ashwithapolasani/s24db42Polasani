var bikes = require('../models/bikes');
// List of all bikes
exports.bikes_list = function (req, res) {
    res.send('NOT IMPLEMENTED: bikes list');
};
// for a specific bikes.
exports.bikes_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: bikes detail: ' + req.params.id);
};
// Handle bikes create on POST.
exports.bikes_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: bikes create POST');
};
// Handle bikes delete from on DELETE.
exports.bikes_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: bikes delete DELETE ' + req.params.id);
};

// Handle bikes update form on PUT.
exports.bikes_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: bikes update PUT' + req.params.id);
};


exports.bikes_list = async function (req, res) {
    try {
        thebikes = await bikes.find();
        res.send(thebikes);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// VIEWS
// Handle a show all view
exports.bikes_view_all_Page = async function (req, res) {
    try {
        thebikes = await bikes.find();
        res.render('bikes', { title: 'bikes Search Results', results: thebikes });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle bikes create on POST.
exports.bikes_create_post = async function (req, res) {
    console.log(req.body)
    let document = new bikes();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"bikes_type":"goat", "cost":12, "size":"large"}
    document.item_type = req.body.item_type;
    document.item_name = req.body.item_name;
    document.item_price = req.body.item_price;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};