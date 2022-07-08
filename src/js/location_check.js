var current_locs = window.location.href.split("?")[0].split("#")[0].split("/");

var current_location = current_locs.pop()
while (current_location == "") {
	current_location = current_locs.pop()
}

var locs = [["index.html", "avdanos.com", "avdan_web"], ["features-beta", "features-beta.html"], ["downloads", "downloads.html"], ["support", "support.html"], ["docs", "docs.html"], ["demo", "demo.html"]];

for (var i = 0; i < locs.length; i++) {
	if (locs[i].includes(current_location)) {
		document.querySelectorAll(".map .map-item")[i].classList.add("current");
	}
}
