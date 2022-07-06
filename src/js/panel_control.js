
const panelModify = e => {
	if (window.scrollY > 0) {
		document.querySelectorAll(".toggle-lang, .toggle-theme, .menu-download").forEach(item => {item.style.display = "none";});
		document.querySelector(".icon").style.marginRight = "initial";
		document.querySelector(".menu").style.backgroundColor = "var(--menu-bg-scrolled)";
	}
	else {
		document.querySelectorAll(".toggle-lang, .toggle-theme, .menu-download").forEach(item => {item.style.display = null;});
		document.querySelector(".icon").style.marginRight = null;
		document.querySelector(".menu").style.backgroundColor = null;
	}
}

window.addEventListener("scroll", panelModify);
