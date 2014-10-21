/*
$("#main").append(["John Nieves"]);

var email = "karn09@gmail.com";

var newEmail = email.replace("karn09","jcnieves");
console.log(newEmail)

$("#main").append("<br>" + newEmail)


var name = "John Nieves"
var formattedName = HTMLheaderName.replace("%data%", name);
var role = "Web Developer"
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").append(formattedName)
$("#header").append(formattedRole)
*/
var bio = {
    "name": "John Nieves",
    "role": "Web Developer",
    "contact": {
        "mobile": "845.699.7051",
        "email": "karn09@gmail.com",
        "github": "karn09",
        "location": "New York City"
    },
    "welcomeMessage": "Welcome to my profile!",
    "skills": ["JavaScript", "HTML", "CSS", "Ubuntu Linux"],
    "bioPic": "images/fry.jpg"
};

var work = {
    "jobs": [{
        "title": "Recruiter",
        "employer": "Solomon Page Group",
        "yearsWorked": "2014 - Current",
        "city": "New York, NY",
        "description": "Recruited and stuff"
    }, {
        "title": "Recruiter",
        "employer": "Apex Systems",
        "yearsWorked": "2011 - 2014",
        "city": "New York, NY",
        "description": "Recruited and stuff"
    }]
};

var education = {
    "schools": [{
        "name": "PurdueUniversity",
        "city": "WestLafayette, IN",
        "yearsAttended": "2006-2009",
        "degree": "BS",
        "major": "BusinessManagement"
    }],
    "onlineCourses": [{
        "name": "Udacity",
        "year": "2014",
        "courses": [
            "Intro to HTML & CSS",
            "JavaScript Basics"
        ]
    }, {
        "name": "CodeCademy",
        "year": "2014",
        "courses": [
            "JavaScript",
            "jQuery"
        ]
    }, {
        "name": "CodeSchool",
        "year": "2014",
        "courses": [
            "JavaScript Road Trip Pt 1",
            "JavaScript Road Trip Pt 2"
        ]
    }]
}
var projects = {
    "projects": [{
        "title": "HTML & CSS project",
        "date": "2014",
        "description": "Create a template based off a provided PDF design mockup. Implemented responsive capabilities for mobile devices. Utilized Foundation"
    }]
}

/*var confirm  = #81368969;
}
$("#main").append(bio.name);
$("#main").append(work["position"]);
$("#main").append(education.name)*/
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedHTMLmobile = HTMLmobile.replace("%data%", bio.contact["mobile"]);
var formattedHTMLemail = HTMLemail.replace("%data%", bio.contact["email"]);
var formattedHTMLgithub = HTMLgithub.replace("%data%", bio.contact["github"]);
var formattedHTMLlocation = HTMLlocation.replace("%data%", bio.contact["location"]);
$("#header").prepend(formattedRole)
$("#header").prepend(formattedName)
$("#topContacts").prepend(formattedHTMLlocation);
$("#topContacts").prepend(formattedHTMLgithub);
$("#topContacts").prepend(formattedHTMLemail);
$("#topContacts").prepend(formattedHTMLmobile);

var formattedHTMLbiopic = HTMLbioPic.replace("%data%", "images/fry.jpg")
$("#header").append(formattedHTMLbiopic);

var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage)
$("#header").append(formattedWelcomeMsg)

if (bio.skills.length) {
    $("#header:last").append(HTMLskillsStart);
    for (var i = 0; i < bio.skills.length; i++) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").prepend(formattedSkill);
    }
}

function displayWork() {

    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].yearsWorked);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
}

displayWork();