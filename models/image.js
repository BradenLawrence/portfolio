var mongoose = require("mongoose")

var imageSchema = new mongoose.Schema({
    name:   String,
    url:    String,
    cover:  Boolean
})

module.exports = mongoose.model("Image", imageSchema)