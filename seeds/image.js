var mongoose    = require("mongoose"),
    Image       = require("../models/image")

var myImages = [
    {
        name:   "Title Page",
        url:    "/images/weRead_title.png",
        cover:  true
    },
    {
        name:   "Image 01",
        url:    "/images/weRead_title.png",
        cover:  false
    },
    {
        name:   "Image 02",
        url:    "/images/weRead_title.png",
        cover:  false
    },
    {
        name:   "Image 03",
        url:    "/images/weRead_title.png",
        cover:  false
    },
    {
        name:   "Unrelated",
        url:    "/images/weRead_title.png",
        cover:  false
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