var mongoose    = require("mongoose"),
    Image       = require("../models/image")

var myImages = [
    {
        name:   "Title Page",
        url:    "./assets/images/weRead_title.png",
        cover:  true
    }
]

const seedImages = function(){

    Image.remove({}, function(error){
        if(error){
            console.log(error)
        } else {
            myImages.forEach(function(image){
                Image.create(image, function(error, returnedImage){
                    if(error){
                        console.log(error)
                    } else {
                        returnedImage.save()
                    }
                })
            })
        }
    })
    
}

module.exports = seedImages