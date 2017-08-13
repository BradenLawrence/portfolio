var mongoose = require("mongoose")

var imageSchema = new mongoose.Schema({
    name:           String,
    url:            String,
    description:    String,
    sort:           Number
})

module.exports = mongoose.model("Image", imageSchema)