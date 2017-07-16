var mongoose    = require("mongoose"),
    Project     = require("../models/project"),
    Image       = require("../models/image")

var myProjects = [
    {
        title:          "weRead",
        date:           "Mon, 05 Oct 2015 12:26:41 +0000",
        description:    "Placeholder description",
        client:         "General Assembly",
        media:  [
                        "Adobe InDesign",
                        "Axure",
                        "InVision"
            ],
        links:          "http://www.placeholder.com"
    }
]

const seedProjects = function(){
    
    // Remove all projects
    Project.remove({title: "weRead"}, function(error){
        if(error){
            console.log(error)
        } else {
            myProjects.forEach(function(project){
                Project.create(project, function(error, returnedProject){
                    if(error){
                        console.log(error)
                    } else {
                        console.log("Created " + returnedProject.title)
                        Image.find({ $or: [ { name: "Title Page" }, 
                                            { name: "Image 01" },
                                            { name: "Image 02" },
                                            { name: "Image 03" }
                                        ] }, function(error, returnedImages){
                            if(error){
                                console.log(error)
                            } else {
                                returnedImages.forEach(function(image){
                                    returnedProject.images.push(image)
                                })
                            }
                            returnedProject.save()
                        })
                    }
                })
            })
        }
    })
    
}

module.exports = seedProjects