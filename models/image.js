var mongoose = require("mongoose")

var imageSchema = new mongoose.Schema({
    name:           String,
    url:            String,
    description:    String
})

module.exports = mongoose.model("Image", imageSchema)