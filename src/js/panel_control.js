
const panelModify = e => {
	if (window.scrollY > 0) {
		document.querySelectorAll(".toggle-lang, .toggle-theme, .menu-download").forEach(item => {item.style.display = "none";});
		document.querySelector(".icon").style.display = "none";
		document.querySelector(".menu").style.backgroundColor = "var(--menu-bg-scrolled)";
		document.querySelector(".menu").style.padding = "0";
		document.querySelector(".menu").style.height = "3.5rem";
		document.querySelector(".map").style.background = "none";
		document.querySelector(".map").style.margin = "initial";
	}
	else {
		document.querySelectorAll(".toggle-lang, .toggle-theme, .menu-download").forEach(item => {item.style.display = null;});
		document.querySelector(".icon").style.display = null;
		document.querySelector(".menu").style.backgroundColor = null;
		document.querySelector(".menu").style.padding = null;
		document.querySelector(".menu").style.height = null;
		document.querySelector(".map").style.background = null;
		document.querySelector(".map").style.margin = null;
	}
}

window.addEventListener("scroll", panelModify);
