var mongoose    = require("mongoose"),
    Image       = require("../models/image")

var myImages = [
    // weRead
    {
        name:   "Title Page",
        url:    "/images/weRead/weRead_title.png",
        description: "",
        sort:   1
    },
    {
        name:   "Home Screen",
        url:    "/images/weRead/02_homepage.png",
        description: "This is the home screen to be used by teachers. Here we see a list of classes that the teacher is assigned to, one of which is starting in five minutes! The number of classes shown here is a typical number that teachers would be responsible for. <br><br>In most cases, it will be multiple instances of the same class, set at different times of day, or different days of the week.",
        sort:   2
    },
    {
        name:   "Class Screen",
        url:    "/images/weRead/04_today_s_class_select_file.png",
        description: "This is the classroom screen, where the majority of activities will take place. Teachers and students will enter the class similarly to a chatroom, and the teacher will control when class begins and ends using the switch in the upper right, and present lessons to the class via webcam or other media prepared ahead of time. <br><br>When the class period ends, the room stays open for students to collaborate and ask questions.",
        sort:   3
    },
    {
        name:   "Chat Groups",
        url:    "/images/weRead/19_today_s_class_type_instructions.png",
        description: "The chat area below controls a number of options for conducting class. The teacher may call upon one or more students to speak to the group, review their messages for comments or questions, create workgroups, and talk selectively to those groups as needed.",
        sort:   4
    },
    {
        name:   "Overtime Screen",
        url:    "/images/weRead/14_today_s_class_overtime.png",
        description: "The system is planned around classes starting and stopping at predetermined times, but control ultimately rests with the teacher. On this screen, we see that the teacher has chosen to not end class automatically, and the class is currently running five minutes over. While it is not a good practice to go over time on a regular basis, this gives the teacher more flexibility.",
        sort:   5
    },
    {
        name:   "Site Map",
        url:    "/images/weRead/BradenLawrence_FinalPresentation_Page_11.png",
        description: "I developed this site map to show the primary pages that teachers and students will use, as well as the supporting pages needed to make them possible. I also identified Lesson Planning, Grades, and Assignments as areas for further development, as they are topics that are equally complex to the one I'm solving here, and deserve attention outside the scope of this project.",
        sort:   6
    },
    {
        name:   "Flow Chart",
        url:    "/images/weRead/BradenLawrence_FinalPresentation_Page_07.png",
        description: "A basic flowchart documenting the normal flow of class. It walks through selecting a lesson deck, typing an introduction, and deciding when to start class. The teacher can then gauge how the students are responding to the material, and adjust the presentation accordingly. This kind of real time adjustment is only possible because of the way classes are structured in weRead. The ability for teachers to evaluate the class's understanding is the piece that is missing from many online learning platforms.",
        sort:   7
    },
    {
        name:   "User Profile",
        url:    "/images/weRead/BradenLawrence_FinalPresentation_Page_05.png",
        description: "Ben is one of the personas I created based on the interviews I had with teachers who have taught online classes in the past. His students have access to online collaboration tools through their school's online learning platform, but they prefer to use a patchwork of tools they are used to using in their personal life, such as email and facebook.",
        sort:   8
    },
    // Spark
    {
        name:   "Spark Course Menu",
        url:    "/images/spark/Home - Student – Passed.png",
        description: "The course homepage was the starting point for the Spark interface. Our development goals for Spark were to start with the smallest piece possible, and expand upon it over time. Safelight Security already had a large library of courses that including assessments and chapter navigation, so the course homepage was a natural place to start. One of the most common pieces of feedback we received about the existing courses was that users were unsure of what to do after completing a course. So for this interface, I wanted to make sure it was clear to the user when they accomplished a task, and where they stood in the grand scheme of things.",
        sort:   1
    },
    {
        name:   "View Course",
        url:    "/images/spark/Home - Student – Course Content.png",
        description: "The video player shows an example of how Safelight's existing courses would fit in the interface. Chapters can be selected from the dropdown ribbon on the upper right, and transcripts are available to users who prefer to read the course text.",
        sort:   2
    },
    {
        name:   "Course Complete",
        url:    "/images/spark/Home - Student - Course Complete.png",
        description: "One of the major pain points of Safelight's clients was the lack of participation among employees. To help combat this, we experimented with a number of ideas to spur competition. This included a leaderboard that awarded points to the staff that complete courses first, and had the highest assessment scores. Another concept is awarding 'achievements' based on customizable criteria.",
        sort:   3
    },
    {
        name:   "Manager Edit Course",
        url:    "/images/spark/Courses - Program Manager.png",
        description:  "From this menu, program managers would select which chapters of the course would be seen by the different staff groups. For example, customer service staff might see a broad overview of the concepts being taught, while IT staff would be required to view a more in-depth lesson. Other chapters could be hidden altogether if they are not relevant to your organization. Similarly, assessments can be given customized question pools.",
        sort:   4
    },
    // Mobile Bay
    {
        name:   "Mobile Bay - Title",
        url:    "/images/mobileBay/MobileSecurity_Infographic_Top.png",
        description:  "For this infographic, I worked with cybersecurity experts to prioritize a list of the most important stats we wanted to communicate, and developed a theme based on the times when mobile devices are most at risk: vacations! <br>The full graphic has been divided into three sections, this first one is reminiscent of holiday getaway posters and features a number of behaviors that put their devices at risk!",
        sort:   1
    },
    {
        name:   "Left At The Gate",
        url:    "/images/mobileBay/MobileSecurity_Infographic_Mid.png",
        description:  "The second piece features airport iconography, and demonstrates one way thieves break into phones. Many lock screens allow users to make several passcode attempts before going into lockdown. Thieves know this, and will try to get in using the ten most common passcodes seen above, so if you see yours up there, CHANGE IT!!!",
        sort:   2
    },
    {
        name:   "Lost In Paradise",
        url:    "/images/mobileBay/MobileSecurity_Infographic_Bot.png",
        description:  "Finally, this driving map highlights the most common places devices are lost or stolen, as well as a few takeaways.",
        sort:   3
    },
    // Phases of the Moon
    {
        name:   "Moon",
        url:    "/images/sunMoonStars/moon.png",
        description:  "",
        sort:   1
    },
    {
        name:   "Phases of the Moon",
        url:    "/images/sunMoonStars/Patterns_of_the_Moon_Infographic.png",
        description:  "This infographic demonstrates how the positions of the earth, sun, and moon interact to form the eight familiar shapes we see in the sky. It was designed for use by teachers who will be giving lessons about our solar system, but might need a refresher on some of the topics they are likely to be asked about. The sidebar contains introductory information and doubles as the sun, giving us a consistent light source. The eight positions of the moon show us how they would look to someone standing on Earth from that angle. As an added bonus, Earth's axis and The Moon's orbit both have the correct tilt, and all of the objects seen here are to scale.",
        sort:   2
    },
    // Camp Space
    {
        name:   "Title",
        url:    "/images/campSpace/CampSpaceTitle.png",
        description:  "The title page features a crossfading series of space themed images. Behind the scenes, this page also uses a header partial unique from the rest of the site.",
        sort:   1
    },
    {
        name:   "Landing Sites",
        url:    "/images/campSpace/LandingSites.png",
        description:  "The index view contains a list of landing sites pulled from mongodb using mongoose. From here, users can click on one to view more details, or add a new one. If they are not logged in, they will be asked to either sign in or create a new account.",
        sort:   2
    },
    {
        name:   "Site Details",
        url:    "/images/campSpace/SiteDetails.png",
        description:  "The show page contains additional details about the site, if the current user is also the auther of the page, they are given the option to edit the details or delete the site altogether. Users can add comments below, and can similarly be edited or deleted by the comment's author.",
        sort:   3
    },
    {
        name:   "Site Edit",
        url:    "/images/campSpace/SiteEdit.png",
        description:  "The edit route prepopulates a form with the existing information about the site. When the user submits, the information in the db is updated accordingly. It also performs a check server side to make sure the user is in fact the page's author, and doesn't rely on the UI simply hiding the edit link.",
        sort:   4
    },
    // Color Game
    {
        name:   "Color Game",
        url:    "/images/colorGame/NormalGame.png",
        description:  "In the default game mode, the game randomly chooses a 'correct' color and displays its RGB code at the top. It then makes six boxes and generates generates colors for each of them. To make the game fair, the random colors are compared to the 'correct' color to make sure they aren't too similar. If the user clicks on the wrong answer, that box is removed and resets their 'winning streak'.",
        sort:   1
    },
    {
        name:   "Easy Game",
        url:    "/images/colorGame/EasyGame.png",
        description:  "In easy mode, half as many boxes are created, and the colors generated need to be even less similar to the 'correct' color.",
        sort:   2
    },
    {
        name:   "Mobile View",
        url:    "/images/colorGame/Vertical.png",
        description:  "A vertical view for narrow screens.",
        sort:   3
    },
    // Palette Picker
    {
        name:   "Palette Component List",
        url:    "/images/palettePicker/01_EmberQuickStart.png",
        description:  "Step 1 is to create several example palettes that include a name, an image, and a few other properties. These are stored in a fake database tool called Mirage. The data for each of these palettes are loaded and displayed using a component called palette-frame.",
        sort:   1
    },
    {
        name:   "Zoom Action and Category Helper",
        url:    "/images/palettePicker/02_EmberQuickStart.png",
        description:  "Next we add a click handler action to each image. The action toggles an 'isWide' class on the image and enlarges the image based on our styles. We also add a helper to categorize the mood of our palettes. Here, we give the helper the mood listed on the palette and match it against a list of 'light' or 'dark' moods, and display them.",
        sort:   2
    },
    {
        name:   "Filter Component",
        url:    "/images/palettePicker/03_EmberQuickStart.png",
        description:  "After that we create a filter component to control which palettes get displayed. We first create an input, and on every keypress we use its value to make a call to our Mirage database. We then tell Mirage to take that value and filter it against our list of palettes.",
        sort:   3
    },
    {
        name:   "Map Utility and Service",
        url:    "/images/palettePicker/04_EmberQuickStart.png",
        description:  "You might be asking yourself, 'Gee, do palettes really need a map service?' and the answer is YES! Here we integrate the Google Maps api as a utility, and access it using a new location-map component. The new component takes the 'city' property of a palette and passes it to a map service we create. The api returns a map with our city pinned.",
        sort:   4
    },
    {
        name:   "Nested Show Route",
        url:    "/images/palettePicker/05_EmberQuickStart.png",
        description:  "The next step is to create a nested route for our palettes. To make this happen, we move our default palettes route into its nested 'index', then create a 'show' route for displaying further details. To build what it looks like, we take the ID from one of the palettes and find it in our Mirage database. The show route template can then show additional details from the palette.",
        sort:   5
    },
    {
        name:   "Route Links",
        url:    "/images/palettePicker/06_EmberQuickStart.png",
        description:  "Lastly, we add some links to the index route to call the show route using the ID of the palette you click on.",
        sort:   6
    },
    // Photowave
    {
        name:   "Vaporwave Background",
        url:    "/images/photowave/background_cover.png",
        description:  "",
        sort:   1
    },
    {
        name:   "Waiting for Video",
        url:    "/images/photowave/waiting.png",
        description:  "When the page initially loads, it will automatically request a media stream from the user's camera. The video element then sets the media stream as its srcObject. If for some reason the auto-start fails, there is button to manually request the stream.",
        sort:   2
    },
    {
        name:   "Start Recording",
        url:    "/images/photowave/recording.png",
        description:  "When the stream state is active, the video element displays the current stream. The video scales with the page independantly from the size of the stream.",
        sort:   3
    },
    {
        name:   "Photobooth",
        url:    "/images/photowave/countdown.png",
        description:  "Once the user kicks things off, they see a countdown from 3, followed by a series of camera flashes. At each flash, the RecordImage action takes a screenshot from the video and draws it to a hidden canvas. Those canvas images are used to assemble an animated gif. The countdown and flashes both use the react-modal package in two different ways, depending on what props are passed to them.",
        sort:   4
    },
    {
        name:   "Share Image",
        url:    "/images/photowave/download.png",
        description:  "After the photobooth function takes 6 pictures, they are encoded together to make a dataURL for an animated gif, which is displayed in another modal window. From there, the user can download the gif, or click 'try again' to return to the photobooth.",
        sort:   5
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