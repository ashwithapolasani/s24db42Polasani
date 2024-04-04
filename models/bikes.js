const mongoose = require("mongoose")
const bikesSchema = mongoose.Schema({
item_type: String,
item_name: String,
item_price: Number
})
module.exports = mongoose.model("bikes",
bikesSchema)