// M A I N

var content1 = document.createElement("div");
content1.innerHTML = "Hi";

var content2 = document.createElement("div");
content2.innerHTML = "Hello";

var content3 = document.createElement("div");
content3.innerHTML = "Test3";

content1.classList.add("noselect");
content2.classList.add("noselect");
content3.classList.add("noselect");

var apps_list_g = [
	{
		"title" : "Calculator",
		"src" : "src/images/demo/icons/Apps/Calculator.png",
		"content" : content1
	},
	{
		"title" : "Calendar",
		"src" : "src/images/demo/icons/Apps/Calendar.png",
		"content" : content2
	},
	{
		"title" : "AfterEffects",
		"src" : "src/images/demo/icons/Apps/AfterEffects.png",
		"content" : content3
	},
]

appBarGenerate(apps_list_g);
