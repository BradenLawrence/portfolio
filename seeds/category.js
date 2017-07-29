var mongoose    = require("mongoose"),
    Category    = require("../models/category"),
    Project     = require("../models/project")

var myCategories = [
    {
        name:   "UX Design"
    },
    {
        name:   "Graphic Design"
    },
    {
        name:   "Web Development"
    }
]

const seedCategories = function(){
    
    // Remove all categories
    Category.remove({ $or: [
            {name: "UX Design"},
            {name: "Graphic Design"},
            {name: "Web Development"}
        ] }, function(error){
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
                    }
                })
            })
        }
    })
    
}

module.exports = seedCategories