var mongoose = require("mongoose")

var imageSchema = new mongoose.Schema({
    url:    String,
    cover:  Boolean
})

module.exports = mongoose.model("Image", imageSchema)