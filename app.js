// PACKAGES
var express     = require("express"),
    app         = express(),
    mongoose    = require("mongoose")
    
// SEEDS
var seedImages              = require("./seeds/image"),
    seedProjects            = require("./seeds/project"),
    seedProjectImages       = require("./seeds/projectImages"),
    seedCategories          = require("./seeds/category"),
    seedCategoryProjects    = require("./seeds/categoryProjects")
    
// MONGOOSE SETTINGS
mongoose.Promise = global.Promise
mongoose.connect(process.env.DATABASEURL)


// MODELS
var Category    = require("./models/category.js"),
    Project     = require("./models/project"),
    Image       = require("./models/image.js")

// GENERAL APP SETTINGS
app.set("view engine", "ejs")
app.use(express.static(__dirname + "/assets"))
app.use(express.static(__dirname + "/node_modules"))

// SEEDS
// seedImages()
// seedProjects()
// seedProjectImages()
// seedCategories()
// seedCategoryProjects()

// ROUTES
//  - Home
app.get("/", function(request, response){
    response.redirect("/portfolio")
})

//  - Index
app.get("/portfolio", function(request, response){
    Category.find({}).populate({
        path:       "projects",
        populate:   {path: "cover"}
        }).exec(function(error, returnedCategories){
        if(error){
            console.log(error)
        } else {
            // Categories have a sort "value" that determines the order they should go in
            // This compare function makes sure they appear in the correct order, regardless of the order that exists in the DB
            returnedCategories.sort(function(a,b){
                return a.sort > b.sort 
            })
            response.render("index", {categories: returnedCategories})
        }
    })
})

//  - Show
app.get("/portfolio/:id", function(request, response){
    if(Project.findOne({_id: request.params.id}) !== undefined) {
        Project.findOne({_id: request.params.id}).populate("images").exec(function(error, returnedProject){
            if(error) {
                response.redirect("/portfolio")
            } else {
                returnedProject.images.sort(function(a,b){
                    // Same as above, but for images
                    return a.sort > b.sort
                })
                response.render("show", {project: returnedProject})
            }
        })
    } else {
        response.redirect("/portfolio")
    }
})


app.use(function(req, res, next){
    res.status(404).redirect("/portfolio");
});

//  - New

//  - Create

//  - Edit

//  - Update

//  - Destroy

//  - Listen
app.listen(process.env.PORT, function(){
    console.log("Portfolio site is running...")
})