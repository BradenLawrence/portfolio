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
        links:          "http://www.placeholder.com",
        images: []
    },
    {
        title:          "Spark",
        date:           "Mon, 30 Jun 2014 03:10:00 +0000",
        description:    "Placeholder description",
        client:         "Safelight Security",
        media:  [
                        "Adobe Illustrator",
            ]
    },
    {
        title:          "Mobile Bay",
        date:           "Fri, 18 Jan 2013 17:31:00 +0000",
        description:    "Placeholder description",
        client:         "Safelight Security",
        media:  [
                        "Adobe Illustrator",
            ]
    },
    {
        title:          "Phases of the Moon",
        date:           "Tue, 22 Nov 2016 18:49:00 +0000",
        description:    "Placeholder description",
        client:         "Project Lead The Way",
        media:  [
                        "Adobe Illustrator",
                        "Adobe InDesign"
            ]
    },
    {
        title:          "Camp Space",
        date:           "Thu, 08 Jun 2017 19:18:00 +0000",
        description:    "Placeholder description",
        media:  [
                        "Node.js",
                        "Express",
                        "Mongo DB"
            ]
    },
    {
        title:          "Color Game",
        date:           "Mon, 13 Feb 2017 03:55:00 +0000",
        description:    "Placeholder description",
        media:  [
                        "vanilla javaScript",
            ]
    }
]

const seedProjects = function(){
    
    // Remove all projects
    Project.remove({ $or: [ { title: "weRead" }, 
                            { title: "Spark" },
                            { title: "Mobile Bay" },
                            { title: "Phases of the Moon" },
                            { title: "Camp Space" },
                            { title: "Color Game" }
                        ] }, function(error){
        if(error){
            console.log(error)
        } else {
            myProjects.forEach(function(project){
                Project.create(project, function(error, returnedProject){
                    if(error){
                        console.log(error)
                    } else {
                        console.log("Created " + returnedProject.title)
                        
                    }
                })
            })
        }
    })
    
}

module.exports = seedProjects