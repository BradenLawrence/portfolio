var mongoose    = require("mongoose"),
    Project     = require("../models/project"),
    Image       = require("../models/image")

var myProjects = [
    {
        title:          "Photowave",
        date:           "Fri, 02 Mar 2018 22:00:00 +0000",
        description:    "I wanted to learn more about WebRTC, so I built this tool in React/Redux to take userMediaStream data and turn it into silly gifs with a cool 80s vaporwave theme. The user's stream is acquired using simple media constraints and a call to getUserMedia, then shown on the html video element. Screenshots are taken from the video and drawn to a canvas, which are then used to assemble a gif ready to download.",
        media:  [
                        "React",
                        "Redux",
                        "WebRTC"
            ],
        link:           "https://photowave.herokuapp.com"
    },
    {
        title:          "Palette Picker",
        date:           "Sun, 14 Oct 2017 22:00:00 +0000",
        description:    "A spin on the Ember Super Rentals tutorial project. For this project, we go through each of the main features used in Ember: Components, Actions, Helpers, Controllers, Utilities, and Services. The metaphor starts to break down once we get to the map API, but eventually I'd like to add a component to select colors from a Photoshop style palette.",
        media:  [
                        "Node.js",
                        "Ember.js"
            ],
        link:           "https://rocky-bayou-57966.herokuapp.com/palettes"
    },
    {
        title:          "Camp Space",
        date:           "Thu, 08 Jun 2017 19:18:00 +0000",
        description:    "A guide to the many places mankind has reached throughout history, Camp Space is a website designed using Node.js as part of a web development course through Udemy. The process of building it covered RESTful routing, database driven content, authentication, and user created content.",
        media:  [
                        "Node.js",
                        "Express",
                        "Mongo DB"
            ],
        link:           "https://pure-hollows-41225.herokuapp.com/"
    },
    {
        title:          "Color Game",
        date:           "Mon, 13 Feb 2017 03:55:00 +0000",
        description:    "This is a quick game made in javaScript to teach people how to read colors shown in rgb. In each round, you are given an rgb code, and six boxes, one of which matches the code.",
        media:  [
                        "vanilla javaScript",
            ],
        link:           "https://bradenlawrence.github.io/colorGame/"
    },
    {
        title:          "weRead",
        date:           "Mon, 05 Oct 2015 12:26:41 +0000",
        description:    "Made to demonstrate the UX methodology, weRead is a prototype for a learning management system that allows online classes to be taught in a way that is similar to in-person classes. I began with a series of interviews with teachers and students who have used online classes in the past. From those interviews, I created user profiles, pain points, and workflows that informed the design of the clickable prototype.",
        client:         "General Assembly",
        media:  [
                        "Adobe InDesign",
                        "Axure",
                        "InVision"
            ],
        link:          "/projects/BradenLawrence_weRead.pdf"
    },
    {
        title:          "Spark",
        date:           "Mon, 30 Jun 2014 03:10:00 +0000",
        description:    "Safelight Security had a collection of cybersecurity training courses and wanted a better way to let our customers assign them to their staff and track their progress. <br>For staff, it highlights the course assignments that are due next, and features leaderboards to encourage participation. Staff managers can view the members on their team and monitor their progress. Additionally, program managers can assign course curriculums, set due dates, and edit course content.",
        client:         "Safelight Security",
        media:  [
                        "Adobe Illustrator",
            ]
    },
    {
        title:          "Mobile Bay",
        date:           "Fri, 18 Jan 2013 17:31:00 +0000",
        description:    "Keeping your devices safe isn't easy, so take a trip to Mobile Bay and learn the dos and don'ts of mobile security. This three part infographic explores some of the frightening statistics about traveling with mobile devices.",
        client:         "Safelight Security",
        media:  [
                        "Adobe Illustrator",
            ],
        link:           "/projects/BradenLawrence_MobileBay.png"
    },
    {
        title:          "Phases of the Moon",
        date:           "Tue, 22 Nov 2016 18:49:00 +0000",
        description:    "This infographic demonstrates how the positions of the earth, sun, and moon interact to form the eight familiar shapes we see in the sky.",
        client:         "Project Lead The Way",
        media:  [
                        "Adobe Illustrator",
                        "Adobe InDesign"
            ],
        link:           "/projects/BradenLawrence_PatternsOfTheMoon.png"
    },
]

const seedProjects = function(){
    
    // Remove all projects
    Project.remove({ $or: [ { title: "weRead" }, 
                            { title: "Spark" },
                            { title: "Mobile Bay" },
                            { title: "Phases of the Moon" },
                            { title: "Camp Space" },
                            { title: "Color Game" },
                            { title: "Palette Picker" },
                            { title: "Photowave" }
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