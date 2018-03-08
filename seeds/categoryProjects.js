var mongoose    = require("mongoose"),
    Project     = require("../models/project"),
    Category    = require("../models/category") 

const seedCategoryProjects = function(){

    Category.findOne({name: "UX Design"}, function(error, uxDesign){
        if(error){
            console.log(error)
        } else {
            Project.find({ $or: [
                { title: "weRead" }, 
                { title: "Spark" }
            ] }, function(error, returnedProjects){
                if(error){
                    console.log(error)
                } else {
                    returnedProjects.forEach(function(project){
                        uxDesign.projects.push(project)
                    })
                }
                uxDesign.save()
            })
        }
    })
    Category.findOne({name: "Graphic Design"}, function(error, graphicDesign){
        if(error){
            console.log(error)
        } else {
            Project.find({ $or: [
                { title: "Mobile Bay" }, 
                { title: "Phases of the Moon" }
            ] }, function(error, returnedProjects){
                if(error){
                    console.log(error)
                } else {
                    returnedProjects.forEach(function(project){
                        graphicDesign.projects.push(project)
                    })
                }
                graphicDesign.save()
            })
        }
    })
    Category.findOne({name: "Web Development"}, function(error, webDev){
        if(error){
            console.log(error)
        } else {
            Project.find({ $or: [
                { title: "Photowave" },
                { title: "Camp Space" }, 
                { title: "Palette Picker" },
                { title: "Color Game" }
            ] }, function(error, returnedProjects){
                if(error){
                    console.log(error)
                } else {
                    returnedProjects.forEach(function(project){
                        webDev.projects.push(project)
                    })
                }
                webDev.save()
            })
        }
    })
                            
}

module.exports = seedCategoryProjects