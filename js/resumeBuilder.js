var bio = {
	"name": "Shayan Akhoond" ,
	"role": "Web Developer",
	"welcomeMessage": "I hole you like my resume",	
	"contacts": {
		"mobile": "022-32-55555",
		"email": "shayan@gmail.com",
		"github": "SHakhoond",		
		"location": "broadmeadows, Wellington, New Zealand"
	}, 	
	"skills": [
		" Microsoft MCITP", "cisco CCNA, CCNP", "problem solver", "Quick learner"
	],
	"bioPic": ["./images/fry.gif"]
};

var work = {
	"jobs": [
		{
		"title": "Accountant",
		"employer": "KIA",
		"dates": "2007-2012",
		"location": "Tehran, Iran",
		"description": "prepares assest, liability"
		},
		{
		"title": "Accountant",
		"employer": "TEXTTILE",
		"dates": "2012-2013",
		"location": "theran , iran",
		"description": "prepares assest, liability"
	
	
		}	
  	]
};
	
var project = {
  "projects": [
    {
      "title": "Learning Web Dev",
      "dates": "November 2016 - Present",
      "description": "Learning basics of HTML, CSS, JavaScript",
      "images": ["./images/pic2.gif"]
    }
  ]
};

var education = {
  "schools": 
  [
    {
      "name": "uni Azad",
      "city": "Tehran, Iran",
      "degree": "IT",
      "majors": "Netwirk",
      "url": "http://www.uniazad.com",
      "dates": "2002 - 2005  "
    }
  ],
  "onlineCourses": 
  [
  	{
	 "name": "JS",
	 "school": "Codeadademy",
	 "dates": 2016,
	 "url": "https://www.codeacademy.com"
	},
    {
     "name": "HTML, CSS, Basic JS",
	 "school": "Udacity",
	 "dates": 2016,
	 "url": "https://www.udacity.com"
    }
  ]
};
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").append(formattedMobile, formattedLocation, formattedEmail, formattedGitHub);
$("#footerContacts").append(formattedMobile, formattedEmail, formattedGitHub);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcome);

if(bio.skills.length>0){
	$("#header").append(HTMLskillsStart);
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
	
		$("#skills").append(formattedSkills);
	formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);

		$("#skills").append(formattedSkills);
	formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);

		$("#skills").append(formattedSkills);
	formattedSkills = HTMLskills.replace("%data%", bio.skills[3]);

		$("#skills").append(formattedSkills);
	formattedSkills = HTMLskills.replace("%data%", bio.skills[4]);
};
var displayWork = function() {
	for(job in work.jobs){
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);


		$(".work-entry:last").append(formattedEmployer);
	    $(".work-entry:last").append(formattedWorkTitle);
	    $(".work-entry:last").append(formattedDate);
		$(".work-entry:last").append(formattedWorkLocation);		
		$(".work-entry:last").append(formattedWorkDescription);
	};
}
displayWork();

projects.display = function() {
	for(pro in project.projects){
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", project.projects[pro].title);
		var formattedData = HTMLprojectDates.replace("%data%", project.projects[pro].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", project.projects[pro].description);
		var formattedImages = HTMLprojectImage.replace("%data%", project.projects[pro].images);


		$(".project-entry:last").append(formattedTitle);
		$(".project-entry:last").append(formattedData);
		$(".project-entry:last").append(formattedDescription);
		$(".project-entry:last").append(formattedImages);
	};

};
projects.display()


function nameInter(name){

	name = name.split(" ");
	console.log(name)
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
  
     
    
    return name.join(" ");     
};


education.display = function() {
  for (edu in education.schools) {
    $("#education").append(HTMLschoolStart);

    var formattedName = HTMLschoolName.replace("%data%", education.schools[edu].name);
    $(".education-entry:last").append(formattedName);

    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree);
    $(".education-entry:last").append(formattedDegree);

    var formattedDates = HTMLschoolDates.replace("%data%", education.schools[edu].dates);
    $(".education-entry:last").append(formattedDates);

    var formattedCity = HTMLschoolLocation.replace("%data%", education.schools[edu].city);
    $(".education-entry:last").append(formattedCity);

    var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[edu].majors);
    $(".education-entry:last").append(formattedMajors);
    
  }
  for (course in education.onlineCourses) {
    $(".education-entry:last").append(HTMLonlineClasses);

    var formattedName = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].name);
    $(".education-entry:last").append(formattedName);

    var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
    $(".education-entry:last").append(formattedSchool);

    var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
    $(".education-entry:last").append(formattedDates);

    var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
    $(".education-entry:last").append(formattedURL);

  }
}

education.display();



$("#mapDiv").append(googleMap);


