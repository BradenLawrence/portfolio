var mongoose    = require("mongoose"),
    Image       = require("../models/image")

var myImages = [
    // weRead
    {
        name:   "Title Page",
        url:    "/images/weRead/weRead_title.png",
        description:  "Placeholder description 1"
    },
    {
        name:   "Home Screen",
        url:    "/images/weRead/02_homepage.png",
        description:  "Placeholder description 2"
    },
    {
        name:   "Class Screen",
        url:    "/images/weRead/04_today_s_class_select_file.png",
        description:  "Placeholder description 3"
    },
    {
        name:   "Chat Groups",
        url:    "/images/weRead/19_today_s_class_type_instructions.png",
        description:  "Placeholder description 4"
    },
    {
        name:   "Overtime Screen",
        url:    "/images/weRead/14_today_s_class_overtime.png",
        description:  "Placeholder description 5"
    },
    {
        name:   "Site Map",
        url:    "/images/weRead/BradenLawrence_FinalPresentation_Page_11.png",
        description:  "Placeholder description 6"
    },
    {
        name:   "Flow Chart",
        url:    "/images/weRead/BradenLawrence_FinalPresentation_Page_07.png",
        description:  "Placeholder description 7"
    },
    {
        name:   "User Goals",
        url:    "/images/weRead/BradenLawrence_FinalPresentation_Page_06.png",
        description:  "Placeholder description 8"
    },
    {
        name:   "User Profile",
        url:    "/images/weRead/BradenLawrence_FinalPresentation_Page_05.png",
        description:  "Placeholder description 9"
    },
    // Spark
    {
        name:   "Spark Course Menu",
        url:    "/images/spark/Home - Student – Passed.png",
        description:  "Placeholder description 10"
    },
    {
        name:   "View Course",
        url:    "/images/spark/Home - Student – Course Content.png",
        description:  "Placeholder description 11"
    },
    {
        name:   "Course Complete",
        url:    "/images/spark/Home - Student - Course Complete.png",
        description:  "Placeholder description 12"
    },
    {
        name:   "Manager Edit Course",
        url:    "/images/spark/Courses - Program Manager – Phishing.png",
        description:  "Placeholder description 13"
    },
    // Mobile Bay
    {
        name:   "Mobile Bay - Title",
        url:    "/images/mobileBay/MobileSecurity_Infographic_Top.png",
        description:  "Placeholder description 14"
    },
    {
        name:   "Left At The Gate",
        url:    "/images/mobileBay/MobileSecurity_Infographic_Mid.png",
        description:  "Placeholder description 15"
    },
    {
        name:   "Lost In Paradise",
        url:    "/images/mobileBay/MobileSecurity_Infographic_Bot.png",
        description:  "Placeholder description 16"
    },
    // Phases of the Moon
    {
        name:   "Moon",
        url:    "/images/sunMoonStars/moon.png",
        description:  "Placeholder description 17"
    },
    {
        name:   "Earth",
        url:    "/images/sunMoonStars/earth.png",
        description:  "Placeholder description 18"
    },
    {
        name:   "Phases of the Moon",
        url:    "/images/sunMoonStars/Patterns_of_the_Moon_Infographic.png",
        description:  "Placeholder description 19"
    },
    // Camp Space
    {
        name:   "Title",
        url:    "/images/campSpace/CampSpaceTitle.png",
        description:  "Placeholder description 20"
    },
    {
        name:   "Landing Sites",
        url:    "/images/campSpace/LandingSites.png",
        description:  "Placeholder description 21"
    },
    {
        name:   "Site Details",
        url:    "/images/campSpace/SiteDetails.png",
        description:  "Placeholder description 22"
    },
    {
        name:   "Site Edit",
        url:    "/images/campSpace/SiteEdit.png",
        description:  "Placeholder description 23"
    },
    // Color Game
    {
        name:   "Color Game",
        url:    "/images/colorGame/NormalGame.png",
        description:  "Placeholder description 24"
    },
    {
        name:   "Easy Game",
        url:    "/images/colorGame/EasyGame.png",
        description:  "Placeholder description 25"
    },
    {
        name:   "Mobile View",
        url:    "/images/colorGame/Vertical.png",
        description:  "Placeholder description 26"
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