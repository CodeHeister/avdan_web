var slideTimeout;
slider_index = 0;

var first = true;
document.querySelectorAll(".slide-point").forEach(item => {
	if (first) {
		item.style.backgroundColor = "var(--icon-fill)";
		first = false;
	}
	item.addEventListener("click", e => {
		clearInterval(slideTimeout);

		slideTimeout = setInterval(moveSlide, 5000);

		document.querySelectorAll(".slide-image").forEach(item => {
			item.style.opacity = null;
			item.style.transform = "translateX(150%)";
		});

		document.querySelectorAll(".slide-label").forEach(item => {
			item.style.opacity = null;
			item.style.transform = "translateX(-150%)";
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
		item.style.transform = null;

		var item = document.querySelector(".slide-labels").children[slider_index];
		item.style.opacity = 1;
		item.style.transform = null;

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
		item.style.transform = "translateX(150%)";
	}
});

first = true;
document.querySelectorAll(".slide-label").forEach(item => {
	if (first) {
		item.style.opacity = 1;
		first = false;
	}
	else {
		item.style.transform = "translateX(-150%)";
	}
});

const moveSlide = () => {
	var len = document.querySelectorAll(".slide-point");
	slider_index += parseInt((slider_index >= len.length-1) && `${-1*len.length+1}` || "1");

	document.querySelectorAll(".slide-image").forEach(item => {
		item.style.opacity = null;
		item.style.transform = "translateX(150%)";
	});

	document.querySelectorAll(".slide-label").forEach(item => {
		item.style.opacity = null;
		item.style.transform = "translateX(-150%)";
	});

	document.querySelectorAll(".slide-point").forEach(item => {
		item.style.backgroundColor = null;
	});

	var item = document.querySelector(".slide-images").children[slider_index];
	item.style.opacity = 1;
	item.style.transform = null;

	var item = document.querySelector(".slide-labels").children[slider_index];
	item.style.opacity = 1;
	item.style.transform = null;

	document.querySelector(".slide-control").children[slider_index].style.backgroundColor = "var(--icon-fill)";
}

slideTimeout = setInterval(moveSlide, 5000);
