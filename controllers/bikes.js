// Import the necessary model
var bikes = require('../models/bikes');
 
// Controller function to list all bikess
exports.bikes_list = function (req, res) {
    res.send('NOT IMPLEMENTED: bikes list');
};
 
// Controller function to get details of a specific bikes
exports.bikes_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: bikes detail: ' + req.params.id);
};
 
// Controller function to create a new bikes
exports.bikes_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: bikes create POST');
};
 
// Controller function to delete a specific bikes
exports.bikes_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: bikes delete DELETE ' + req.params.id);
};
 
// Controller function to update details of a specific bikes
exports.bikes_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: bikes update PUT ' + req.params.id);
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

// exports.bikes_detail = async function(req, res) {
//     console.log("detail" + req.params.id)
//     try {
//     result = await bikes.findById( req.params.id)
//     res.send(result)
//     } catch (error) {
//     res.status(500)
//     res.send(`{"error": document for id ${req.params.id} not found`);
//     }
//     };
    
exports.bikes_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await bikes.findById( req.params.id)
    // Do updates of properties
    if(req.body.bikes_type)
    toUpdate.bikes_type = req.body.bikes_type;
    if(req.body.cost) toUpdate.cost = req.body.cost;
    if(req.body.size) toUpdate.size = req.body.size;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
    };

    // Handle Costume delete on DELETE.
    exports.bikes_delete = async function(req, res) {
        console.log("delete " + req.params.id)
        try {
            result = await bikes.findByIdAndDelete(req.params.id)
            console.log("Removed " + result)
            res.send(result)
        } catch (err) {
            res.status(500)
            res.send(`{"error": Error deleting ${err}}`);
        }
    };