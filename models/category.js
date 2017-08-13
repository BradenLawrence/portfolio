var mongoose = require("mongoose"),
    Project  = require("./project.js")

var categorySchema = new mongoose.Schema({
    name:   String,
    projects: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Project"
        }
    ],
    sort:   Number
})

module.exports = mongoose.model("Category", categorySchema)