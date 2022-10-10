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

const appear = target => {
	target.style.opacity = '1';
}

const disappear = target => {
	target.style.opacity = null;
}

if (document.querySelector(".intro")) {
	setTimeout(() => {
		scroll_check();
		window.addEventListener("scroll", function(){
			scroll_check();
		});
	}, 5700);
}
else {
	scroll_check();
	window.addEventListener("scroll", function(){
		scroll_check();
	});
}
