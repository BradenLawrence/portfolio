// PACKAGES
var express = require("express"),
    app     = express()
    
// GENERAL APP SETTINGS
app.set("view engine", "ejs")

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