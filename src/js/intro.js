el_intro = document.querySelector("#cover");
if (getCookie("intro")!=""){
	document.body.removeChild(el_intro);
}
else {
	setCookie("intro", 1, 20);
}
