
const panelModify = e => {
	if (window.scrollY > 30) {
		document.querySelectorAll(".toggle-lang, .toggle-theme, .menu-download, .github-shortcut").forEach(item => {item.style.display = "none";});
		document.querySelector(".icon").style.display = "none";
		document.querySelector(".menu").style.backgroundColor = "var(--menu-bg-scrolled)";
		document.querySelector(".menu").style.padding = "0";
		document.querySelector(".menu").style.height = "3.5rem";
		document.querySelector(".map").style.background = "none";
		document.querySelector(".map").style.margin = "auto";
		document.querySelector(".map").style.margin = "initial";
		document.querySelector(".map").style.backdropFilter = "none";
		document.querySelector(".mobile-menu").style.borderRadius = "0 0 0.75rem 0";
		if (window.matchMedia("(max-width: 768px)").matches) {
			document.querySelector(".menu").style.backgroundColor = "transparent";
		}
		else {
			document.querySelector(".menu").style.backdropFilter = "blur(10px)";
		}
	}
	else {
		document.querySelectorAll(".toggle-lang, .toggle-theme, .menu-download, .github-shortcut").forEach(item => {item.style.display = null;});
		document.querySelector(".icon").style.display = null;
		document.querySelector(".menu").style.backgroundColor = null;
		document.querySelector(".menu").style.padding = null;
		document.querySelector(".menu").style.height = null;
		document.querySelector(".menu").style.backdropFilter = null;
		document.querySelector(".menu").style.backgroundColor = null;
		document.querySelector(".map").style.background = null;
		document.querySelector(".map").style.margin = null;
		document.querySelector(".map").style.backdropFilter = null;
		document.querySelector(".mobile-menu").style.borderRadius = null;
	}
}

window.addEventListener("scroll", panelModify);

document.querySelector(".mobile-menu").addEventListener("click", e => {
	e.currentTarget.style.transform = "translateX(-100%)";
	document.querySelector(".map").style.transform = "translateX(0%)";
});

document.querySelector(".map-icon").addEventListener("click", e => {
	document.querySelector(".map").style.transform = null;
	document.querySelector(".mobile-menu").style.transform = null;
});
