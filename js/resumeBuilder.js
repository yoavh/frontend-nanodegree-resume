/*
This is empty on purpose! Your code to build the resume will go here.
 */ 
 
 var name = "Yoav Hagashi";
 var formattedName = HTMLheaderName.replace("%data%",name);
 
 var role = "Server developer";
 var formattedRole = HTMLheaderRole.replace("%data%",role);
 
 
 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);
 
 
 
 