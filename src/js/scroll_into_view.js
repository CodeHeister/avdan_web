//-- S C R O L L  E V E N T S --// 

function onScrollIntoView(target, k, into, out) { // on scroll into view event
	var position = window.scrollY + window.innerHeight * k; // calculate visual position

	if (position >= target.offsetTop) { // compare with element poistion
		into(target); 
	}
	else {
		out(target); 
	}
}

function scroll_check() { 
	document.querySelectorAll(".text").forEach(item => {
		onScrollIntoView(item, 1, move, moveBack);
	});
}

scroll_check();
window.addEventListener("scroll", function(){
	scroll_check();
});

