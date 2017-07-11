var mongoose    = require("mongoose"),
    Category    = require("../models/category"),
    Project     = require("../models/project")

var myCategories = [
    {
        name:   "UX Design"
    }
]

const seedCategories = function(){
    
    // Remove all projects
    Category.remove({}, function(error){
        if(error){
            console.log(error)
        } else {
            console.log("Removed all categories...")
            myCategories.forEach(function(category){
                Category.create(category, function(error, returnedCategory){
                    if(error){
                        console.log(error)
                    } else {
                        console.log("Created " + returnedCategory.name)
                        Project.find({title: "weRead"}, function(error, returnedProject){
                            if(error){
                                console.log(error)
                            } else {
                                console.log("Added " + returnedProject[0].title + " to " + returnedCategory.name)
                                returnedCategory.projects.push(returnedProject[0])
                                returnedCategory.save()
                            }
                        })
                    }
                })
            })
        }
    })
    
}

module.exports = seedCategories