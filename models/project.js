var mongoose = require("mongoose"),
    Image    = require("./image.js")

var projectSchema = new mongoose.Schema({
    title:          String,
    date:           Date,
    cover:          {
                        type: mongoose.Schema.Types.ObjectId,
                        ref: "Image"
                    },
    images:         [
                        {
                            type: mongoose.Schema.Types.ObjectId,
                            ref: "Image"
                        }
                    ],
    description:    String,
    client:         String,
    media:          [String],
    link:           String,
    
})

module.exports = mongoose.model("Project", projectSchema)