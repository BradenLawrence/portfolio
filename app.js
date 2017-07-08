// PACKAGES
var express     = require("express"),
    app         = express(),
    mongoose    = require("mongoose")
    
// MODELS
var Category    = require("./models/category.js"),
    Project     = require("./models/project"),
    Image       = require("./models/image.js")
    
    
// MONGOOSE SETTINGS
mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost/portfolio")

    
// GENERAL APP SETTINGS
app.set("view engine", "ejs")
app.use(express.static(__dirname + "/assets"))

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