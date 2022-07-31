var slideTimeout;
slider_index = 0;

var first = true;
document.querySelectorAll(".slide-point").forEach(item => {
	if (first) {
		item.style.backgroundColor = "var(--icon-fill)";
		first = false;
	}
	item.addEventListener("click", e => {
		document.querySelectorAll(".slide-image, .slide-label").forEach(item => {
			item.style.opacity = null;
			item.style.display = "none";
		});

		document.querySelectorAll(".slide-point").forEach(item => {
			item.style.backgroundColor = null;
		});

		slider_index = 0;
		var children = e.currentTarget.parentElement.children;
		while (children[slider_index] != e.currentTarget) {
			slider_index++;
		}
		
		var item = document.querySelector(".slide-images").children[slider_index];
		item.style.opacity = 1;
		item.style.display = null;

		var item = document.querySelector(".slide-labels").children[slider_index];
		item.style.opacity = 1;
		item.style.display = null;

		e.currentTarget.style.backgroundColor = "var(--icon-fill)";
	});
});

first = true;
document.querySelectorAll(".slide-image").forEach(item => {
	if (first) {
		item.style.opacity = 1;
		first = false;
	}
	else {
		item.style.display = "none";
	}
});

first = true;
document.querySelectorAll(".slide-label").forEach(item => {
	if (first) {
		item.style.opacity = 1;
		first = false;
	}
	else {
		item.style.display = "none";
	}
});
