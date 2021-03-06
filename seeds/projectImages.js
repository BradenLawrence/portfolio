var mongoose    = require("mongoose"),
    Project     = require("../models/project"),
    Image       = require("../models/image")        
            
const seedProjectImages = function(){           
            // Add images to photowave
            Project.findOne({title: "Photowave"}, function(error, Photowave){
                if(error) {
                    console.log(error)
                } else {
                    Image.find({ $or: [ { name: "Waiting for Video" },
                                        { name: "Start Recording" },
                                        { name: "Photobooth" },
                                        { name: "Share Image" }
                                    ] }, function(error, returnedImages){
                        if(error){
                            console.log(error)
                        } else {
                            returnedImages.forEach(function(image){
                                Photowave.images.push(image)
                            })
                            Image.findOne({ name: "Vaporwave Background" }, function(error, coverImage){
                                if(error) {
                                    console.log(error)
                                } else {
                                    Photowave.cover = coverImage
                                    Photowave.save()
                                }
                            })
                        }
                    })
                }
            })
            // Add images to weRead
            Project.findOne({title: "weRead"}, function(error, weRead){
                if(error) {
                    console.log(error)
                } else {
                    Image.find({ $or: [ { name: "Home Screen" },
                                        { name: "Class Screen" },
                                        { name: "Chat Groups" },
                                        { name: "Overtime Screen" },
                                        { name: "Site Map" },
                                        { name: "Flow Chart" },
                                        { name: "User Profile" }
                                    ] }, function(error, returnedImages){
                        if(error){
                            console.log(error)
                        } else {
                            returnedImages.forEach(function(image){
                                weRead.images.push(image)
                            })
                            Image.findOne({ name: "Title Page" }, function(error, coverImage){
                                if(error) {
                                    console.log(error)
                                } else {
                                    weRead.cover = coverImage
                                    weRead.save()
                                }
                            })
                        }
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
                            Image.findOne({ name: "Spark Course Menu" }, function(error, coverImage){
                                if(error) {
                                    console.log(error)
                                } else {
                                    spark.cover = coverImage
                                    spark.save()
                                }
                            })
                        }
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
                            Image.findOne({ name: "Mobile Bay - Title" }, function(error, coverImage){
                                if(error) {
                                    console.log(error)
                                } else {
                                    mobileBay.cover = coverImage
                                    mobileBay.save()
                                }
                            })
                        }
                    })
                }
            })
            // Add images to Phases of the Moon
            Project.findOne({title: "Phases of the Moon"}, function(error, phasesOfTheMoon){
                if(error) {
                    console.log(error)
                } else {
                    Image.find({ $or: [ { name: "Phases of the Moon" }
                                    ] }, function(error, returnedImages){
                        if(error){
                            console.log(error)
                        } else {
                            returnedImages.forEach(function(image){
                                phasesOfTheMoon.images.push(image)
                            })
                            Image.findOne({ name: "Moon" }, function(error, coverImage){
                                if(error) {
                                    console.log(error)
                                } else {
                                    phasesOfTheMoon.cover = coverImage
                                    phasesOfTheMoon.save()
                                }
                            })
                        }
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
                            Image.findOne({ name: "Title" }, function(error, coverImage){
                                if(error) {
                                    console.log(error)
                                } else {
                                    campSpace.cover = coverImage
                                    campSpace.save()
                                }
                            })
                        }
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
                            Image.findOne({ name: "Color Game" }, function(error, coverImage){
                                if(error) {
                                    console.log(error)
                                } else {
                                    colorGame.cover = coverImage
                                    colorGame.save()
                                }
                            })
                        }
                    })
                }
            })
            // Add images to Palette Picker
            Project.findOne({title: "Palette Picker"}, function(error, palettePicker){
                if(error) {
                    console.log(error)
                } else {
                    Image.find({ $or: [ { name: "Palette Component List" }, 
                                        { name: "Zoom Action and Category Helper" },
                                        { name: "Filter Component" },
                                        { name: "Map Utility and Service" },
                                        { name: "Nested Show Route" },
                                        { name: "Route Links" }
                                    ] }, function(error, returnedImages){
                        if(error){
                            console.log(error)
                        } else {
                            returnedImages.forEach(function(image){
                                palettePicker.images.push(image)
                            })
                            Image.findOne({ name: "Route Links" }, function(error, coverImage){
                                if(error) {
                                    console.log(error)
                                } else {
                                    palettePicker.cover = coverImage
                                    palettePicker.save()
                                }
                            })
                        }
                    })
                }
            })
            
}

module.exports = seedProjectImages