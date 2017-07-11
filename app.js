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



// ROUTES
//  - Home
app.get("/", function(request, response){
    response.redirect("/portfolio")
})

//  - Index
app.get("/portfolio", function(request, response){
    response.render("index")
})

//  - Show

//  - New

//  - Create

//  - Edit

//  - Update

//  - Destroy

//  - Listen
app.listen(process.env.PORT, process.env.ID, function(){
    console.log("Portfolio site is running...")
})