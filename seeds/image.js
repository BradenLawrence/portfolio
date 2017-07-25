var mongoose    = require("mongoose"),
    Image       = require("../models/image")

var myImages = [
    // weRead
    {
        name:   "Title Page",
        url:    "/images/weRead/weRead_title.png",
        cover:  true
    },
    {
        name:   "Home Screen",
        url:    "/images/weRead/02_homepage.png",
        cover:  false
    },
    {
        name:   "Class Screen",
        url:    "/images/weRead/04_today_s_class_select_file.png",
        cover:  false
    },
    {
        name:   "Chat Groups",
        url:    "/images/weRead/19_today_s_class_type_instructions.png",
        cover:  false
    },
    {
        name:   "Overtime Screen",
        url:    "/images/weRead/14_today_s_class_overtime.png",
        cover:  false
    },
    {
        name:   "Site Map",
        url:    "/images/weRead/BradenLawrence_FinalPresentation_Page_11.png",
        cover:  false
    },
    {
        name:   "Flow Chart",
        url:    "/images/weRead/BradenLawrence_FinalPresentation_Page_07.png",
        cover:  false
    },
    {
        name:   "User Goals",
        url:    "/images/weRead/BradenLawrence_FinalPresentation_Page_06.png",
        cover:  false
    },
    {
        name:   "User Profile",
        url:    "/images/weRead/BradenLawrence_FinalPresentation_Page_05.png",
        cover:  false
    },
    // Spark
    {
        name:   "Spark Course Menu",
        url:    "/images/spark/Home - Student - Course Complete.png",
        cover:  true
    },
    {
        name:   "View Course",
        url:    "/images/spark/Home - Student – Course Content.png",
        cover:  false
    },
    {
        name:   "Course Complete",
        url:    "/images/spark/Home - Student - Course Complete.png",
        cover:  false
    },
    {
        name:   "Manager View",
        url:    "/images/spark/17 Home - Staff Manager.png",
        cover:  false
    },
    {
        name:   "Manager Edit Course",
        url:    "/images/spark/Courses - Program Manager – Phishing.png",
        cover:  false
    },
    // Mobile Bay
    {
        name:   "Mobile Bay - Title",
        url:    "/images/mobileBay/MobileSecurity_Infographic_Top.png",
        cover:  true
    },
    {
        name:   "Left At The Gate",
        url:    "/images/mobileBay/MobileSecurity_Infographic_Mid.png",
        cover:  false
    },
    {
        name:   "Lost In Paradise",
        url:    "/images/mobileBay/MobileSecurity_Infographic_Bot.png",
        cover:  false
    },
    {
        name:   "Mobile Bay - Full",
        url:    "/images/mobileBay/MobileSecurity_Infographic_Full.png",
        cover:  false
    },
    // Sun, Moon, Stars
    {
        name:   "Earth",
        url:    "/images/sunMoonStars/earth.png",
        cover:  true
    },
    {
        name:   "Phases of the Moon",
        url:    "/images/sunMoonStars/Patterns_of_the_Moon_Infographic.png",
        cover:  false
    },
    // Camp Space
    {
        name:   "Title",
        url:    "/images/campSpace/CampSpaceTitle.png",
        cover:  true
    },
    {
        name:   "Landing Sites",
        url:    "/images/campSpace/LandingSites.png",
        cover:  false
    },
    {
        name:   "Site Details",
        url:    "/images/campSpace/SiteDetails.png",
        cover:  false
    },
    {
        name:   "Site Edit",
        url:    "/images/campSpace/SiteEdit.png",
        cover:  false
    },
    // Color Game
    {
        name:   "Color Game",
        url:    "/images/colorGame/NormalGame.png",
        cover:  true
    },
    {
        name:   "Easy Game",
        url:    "/images/colorGame/EasyGame.png",
        cover:  false
    },
    {
        name:   "Mobile View",
        url:    "/images/colorGame/Vertical.png",
        cover:  false
    }
]

const seedImages = function(){

    Image.remove({}, function(error){
        if(error){
            console.log(error)
        } else {
            myImages.forEach(function(image){
                Image.create(image, function(error, returnedImage){
                    if(error){
                        console.log(error)
                    } else {
                        returnedImage.save()
                    }
                })
            })
        }
    })
    
}

module.exports = seedImages