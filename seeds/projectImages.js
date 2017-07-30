var mongoose    = require("mongoose"),
    Project     = require("../models/project"),
    Image       = require("../models/image")        
            
const seedProjectImages = function(){           
            // Add images to projects
            Project.findOne({title: "weRead"}, function(error, weRead){
                if(error) {
                    console.log(error)
                } else {
                    Image.find({ $or: [ { name: "Title Page" }, 
                                        { name: "Home Screen" },
                                        { name: "Class Screen" },
                                        { name: "Chat Groups" },
                                        { name: "Overtime Screen" },
                                        { name: "Site Map" },
                                        { name: "Flow Chart" },
                                        { name: "User Goals" },
                                        { name: "User Profile" }
                                    ] }, function(error, returnedImages){
                        if(error){
                            console.log(error)
                        } else {
                            returnedImages.forEach(function(image){
                                weRead.images.push(image)
                            })
                        }
                        weRead.save()
                    })
                }
            })
            // Add images to Spark
            Project.findOne({title: "Spark"}, function(error, spark){
                if(error) {
                    console.log(error)
                } else {
                    Image.find({ $or: [ { name: "Spark Course Menu" }, 
                                        { name: "View Course" },
                                        { name: "Course Complete" },
                                        { name: "Manager View" },
                                        { name: "Manager Edit Course" }
                                    ] }, function(error, returnedImages){
                        if(error){
                            console.log(error)
                        } else {
                            returnedImages.forEach(function(image){
                                spark.images.push(image)
                            })
                        }
                        spark.save()
                    })
                }
            })
            // // Add images to Mobile Bay
            Project.findOne({title: "Mobile Bay"}, function(error, mobileBay){
                if(error) {
                    console.log(error)
                } else {
                    Image.find({ $or: [ { name: "Mobile Bay - Title" }, 
                                        { name: "Left At The Gate" },
                                        { name: "Lost In Paradise" },
                                        { name: "Mobile Bay - Full" }
                                    ] }, function(error, returnedImages){
                        if(error){
                            console.log(error)
                        } else {
                            returnedImages.forEach(function(image){
                                mobileBay.images.push(image)
                            })
                        }
                        mobileBay.save()
                    })
                }
            })
            // Add images to Phases of the Moon
            Project.findOne({title: "Phases of the Moon"}, function(error, phasesOfTheMoon){
                if(error) {
                    console.log(error)
                } else {
                    Image.find({ $or: [ { name: "Moon" }, 
                                        { name: "Phases of the Moon" }
                                    ] }, function(error, returnedImages){
                        if(error){
                            console.log(error)
                        } else {
                            returnedImages.forEach(function(image){
                                phasesOfTheMoon.images.push(image)
                            })
                        }
                        phasesOfTheMoon.save()
                    })
                }
            })
            // Add images to Camp Space
            Project.findOne({title: "Camp Space"}, function(error, campSpace){
                if(error) {
                    console.log(error)
                } else {
                    Image.find({ $or: [ { name: "Title" }, 
                                        { name: "Landing Sites" },
                                        { name: "Site Details" },
                                        { name: "Site Edit" }
                                    ] }, function(error, returnedImages){
                        if(error){
                            console.log(error)
                        } else {
                            returnedImages.forEach(function(image){
                                campSpace.images.push(image)
                            })
                        }
                        campSpace.save()
                    })
                }
            })
            // Add images to Color Game
            Project.findOne({title: "Color Game"}, function(error, colorGame){
                if(error) {
                    console.log(error)
                } else {
                    Image.find({ $or: [ { name: "Color Game" }, 
                                        { name: "Easy Game" },
                                        { name: "Mobile View" }
                                    ] }, function(error, returnedImages){
                        if(error){
                            console.log(error)
                        } else {
                            returnedImages.forEach(function(image){
                                colorGame.images.push(image)
                            })
                        }
                        colorGame.save()
                    })
                }
            })
            
}

module.exports = seedProjectImages