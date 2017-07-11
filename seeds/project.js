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
    Project.remove({}, function(error){
        if(error){
            console.log(error)
        } else {
            console.log("Removed all projects...")
            myProjects.forEach(function(project){
                Project.create(project, function(error, returnedProject){
                    if(error){
                        console.log(error)
                    } else {
                        console.log("Created " + returnedProject.title)
                        Image.find({name: "Title Page"}, function(error, returnedImage){
                            if(error){
                                console.log(error)
                            } else {
                                console.log("Added " + returnedImage[0].name + " to " + returnedProject.title)
                                returnedProject.images.push(returnedImage[0])
                                returnedProject.save()
                            }
                        })
                    }
                })
            })
        }
    })
    
}

module.exports = seedProjects