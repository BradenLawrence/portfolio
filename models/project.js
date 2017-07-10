var mongoose = require("mongoose"),
    Image    = require("./image.js")

var projectSchema = new mongoose.Schema({
    title:  String,
    date:   Date,
    images: [String],
    description:    String,
    client: String,
    media:  [String],
    links:  String
    
})

module.exports = mongoose.model("Project", projectSchema)