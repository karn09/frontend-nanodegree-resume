/*$("#main").append(["John Nieves"]);

var email = "karn09@gmail.com";

var newEmail = email.replace("karn09","jcnieves");
console.log(newEmail)

$("#main").append("<br>" + newEmail)*/
var name = "John Nieves"
var formattedName = HTMLheaderName.replace("%data%", name);
var role = "Web Developer"
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole)
$("#header").prepend(formattedName)