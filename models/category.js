var mongoose = require("mongoose"),
var Project  = require("./project.js")

var categorySchema = new mongoose.Schema({
    name:   String,
    projects: {Project}
})

module.exports = mongoose.model("Category", categorySchema)