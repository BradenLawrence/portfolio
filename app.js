// PACKAGES
var express     = require("express"),
    app         = express(),
    mongoose    = require("mongoose")
    
// SEEDS
var seedImages      = require("./seeds/image"),
    seedProjects    = require("./seeds/project"),
    seedCategories  = require("./seeds/category")
    
// MONGOOSE SETTINGS
mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost/portfolio")

// MODELS
var Category    = require("./models/category.js"),
    Project     = require("./models/project"),
    Image       = require("./models/image.js")

// GENERAL APP SETTINGS
app.set("view engine", "ejs")
app.use(express.static(__dirname + "/assets"))

// SEEDS
// seedImages()
// seedProjects()
// seedCategories()
mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost/portfolio")


// ROUTES
//  - Home
app.get("/", function(request, response){
    response.redirect("/portfolio")
})

//  - Index
app.get("/portfolio", function(request, response){
    Category.find({}).populate({
        path:       "projects",
        populate:   {path: "images"}
        }).exec(function(error, returnedCategories){
        if(error){
            console.log(error)
        } else {
            response.render("index", {categories: returnedCategories})
        }
    })
})

//  - Show
app.get("/portfolio/:id", function(request, response){
    Project.find({_id: request.params.id}, function(error, returnedProject){
        response.render("show")
    })
    
})


//  - New

//  - Create

//  - Edit

//  - Update

//  - Destroy

//  - Listen
app.listen(process.env.PORT, process.env.ID, function(){
    console.log("Portfolio site is running...")
})