var mongoose = require("mongoose"),
    Image    = require("./image.js")

var projectSchema = new mongoose.Schema({
    title:  String,
    date:   Date,
    images: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Image"
        }
    ],
    description:    String,
    client: String,
    media:  [String],
    links:  String
    
})

module.exports = mongoose.model("Project", projectSchema)