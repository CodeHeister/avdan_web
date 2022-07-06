const sizeDiscord = () => {
	document.querySelector(".discord-list iframe").height = 0;
	document.querySelector(".discord-list iframe").height = document.querySelector(".github-list").offsetHeight+"px"
}

window.addEventListener("resize", e => {
	sizeDiscord();
});
