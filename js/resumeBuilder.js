/*$("#main").append(["John Nieves"]);

var email = "karn09@gmail.com";

var newEmail = email.replace("karn09","jcnieves");
console.log(newEmail)

$("#main").append("<br>" + newEmail)*/
var name = "John Nieves"
var formattedName = HTMLheaderName.replace("%data%", name);
var role = "Web Developer"
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").append(formattedName)
$("#header").append(formattedRole)

var bio = {
	"name" : "John Nieves",
	"role" : "Web Developer",
	"contacts" :  {
		"mobile": "845.699.7051",
		"email": "karn09@gmail.com",
		"github" : "karn09",
		"location": "New York City"
	},
	"welcomeMessage" : "Welcome to my profile!",
	"skills" : ["JavaScript", "HTML", "CSS", "Ubuntu Linux"],
	"bioPic" : "images/fry.jpg"
};

var work = {
	"position" : "Recruiter",
	"employer" : "Solomon Page Group",
	"yearsWorked": "2014 - Current",
	"city": "New York, NY"
}

var education = {
	"name": "Purdue University",
	"yearsAttended": "2006-2009",
	"city" : "West Lafayette, IN"
}
/*var confirm  = #81368969;
$("#main").append(bio.name);
$("#main").append(work["position"]);
$("#main").append(education.name)*/
