// Import the necessary model
var bikes = require('../models/bikes');
 
// Controller function to list all bikess
exports.bikes_list = async function (req, res) {
    try {
        thebikes = await Vehicles.find();
        res.send(thebikes);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
 
// Controller function to get details of a specific bikes
exports.bikes_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Vehicles.findById(req.params.id);
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };
 
// Controller function to create a new bikes
exports.bikes_create_post = async function (req, res) {
    console.log(req.body)
    let document = new bikes();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
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
 
// Controller function to delete a specific bikes
exports.bikes_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await bikes.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };
 
// Controller function to update details of a specific bikes
exports.bikes_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
   ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await bikes.findById(req.params.id)
    // Do updates of properties
    if(req.body.name)
    toUpdate.item_type = req.body.item_type;
    if(req.body.item_name) toUpdate.item_name = req.body.item_name;
    if(req.body.item_price) toUpdate.item_price = req.body.item_price;
    let result = await toUpdate.save();
    console.log("Success " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
   failed`);
    }
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

    // Handle bikes delete on DELETE.
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

    exports.bikes_view_one_Page = async function (req, res) {
        console.log("single view for id " + req.query.id)
        try {
            result = await bikes.findById(req.query.id)
            res.render('bikesdetail',
                { title: 'bikes Detail', toShow: result });
        }
        catch (err) {
            res.status(500)
            res.send(`{'error': '${err}'}`);
        }
    };


// Handle building the view for creating a bikes.
// No body, no in path parameter, no query.
// Does not need to be async
exports.bikes_create_Page = function(req, res) {
console.log("create view")
try{
res.render('bikescreate', { title: 'bikes Create'});
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};



// Handle building the view for updating a bikes.
// query provides the id
exports.bikes_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await bikes.findById(req.query.id)
    res.render('bikesupdate', { title: 'bikes Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

// Handle a delete one view with id from query
exports.bikes_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await bikes.findById(req.query.id)
    res.render('bikesdelete', { title: 'bikes Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };