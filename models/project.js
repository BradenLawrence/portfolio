var mongoose = require("mongoose"),
var Image    = require("./image.js")

var projectSchema = new mongoose.Schema({
    title:  String,
    date:   Date,
    images: [Image],
    description:    String,
    client: String,
    media:  [String],
    links:  String
    
})

module.exports = mongoose.model("Project", projectSchema)