const sizeDiscord = () => {
	document.querySelector(".discord-list iframe").height = 0;
	document.querySelector(".discord-list iframe").height = document.querySelector(".github-list").offsetHeight+"px";
}

window.addEventListener("load", e => {
	sizeDiscord();
});

window.addEventListener("resize", e => {
	sizeDiscord();
});

const enableCursor = e => {
	document.querySelectorAll(".slide-point").forEach(item => { 
		item.addEventListener("mouseover", e => {setCursor(e, 1, ["toggle-dragged"], undefined)});
		item.addEventListener("mousemove", e => {coordinateCursor(e, 0, 0, undefined, undefined, ["scale(1)"])});
		item.addEventListener("mouseout", e => {unsetCursor(e, ["toggle-dragged"])});
	});

	document.querySelectorAll(".view-more a").forEach(item => { 
		item.addEventListener("mouseover", e => {setCursor(e, 1, ["link-dragged"], ["link-active"])});
		item.addEventListener("mousemove", e => {coordinateCursor(e)});
		item.addEventListener("mouseout", e => {unsetCursor(e, ["link-dragged"], ["link-active"])});
	});

	document.querySelectorAll(".demo-button, .download-button").forEach(item => { 
		item.addEventListener("mouseover", e => {setCursor(e, 0.2, ["button-dragged"])});
		item.addEventListener("mousemove", e => {coordinateCursor(e, undefined, undefined, undefined, undefined, ["scale(1.15)"])});
		item.addEventListener("mouseout", e => {unsetCursor(e, ["button-dragged"])});
	});

	document.querySelectorAll(".repo-info").forEach(item => {
		item.addEventListener("mouseover", e => {
			cursorIcon.style.display = "flex";
			cursorIcon.style.alignItems = "center";
			cursorIcon.style.borderRadius = "50%";
			cursorIcon.style.width = "4.5rem";
			cursorIcon.style.height = "4.5rem";
			cursorIcon.style.overflow = "hidden";
			var text = document.createElement("div");
			text.innerHTML = "View Project";
			text.style.fontSize = "1rem";
			text.style.textAlign = "center";
			text.style.color = "black";
			e.currentTarget.style.transform = "scale(1.1)";
			cursorIcon.appendChild(text);
		});
		item.addEventListener("mouseout", e => {
			cursorIcon.style.width = null;
			cursorIcon.style.height = null;
			cursorIcon.style.display = null;
			cursorIcon.style.borderRadius = null;
			cursorIcon.style.overflow = null;
			cursorIcon.style.alignItems = null;
			e.currentTarget.style.transform = null;
			cursorIcon.innerHTML = "";
		});
	});
}

function scroll_check() { 
	document.querySelectorAll(".info, .slide-section").forEach(item => {
		onScrollIntoView(item, 0.5, appear, disappear);
	});
}
document.querySelectorAll(".slide-image img").forEach(item => {
    item.addEventListener("mouseleave", e => {
        e.target.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
		slideTimeout = setInterval(moveSlide, 5000);
    });

    item.addEventListener("mouseover", e => {
		clearInterval(slideTimeout);
	});

    item.addEventListener("mousemove", e => {
        e.target.style.transform = "perspective(1000px) rotateX("+((e.offsetY-e.currentTarget.offsetHeight/2)/e.currentTarget.offsetHeight*10)+"deg) rotateY("+((e.offsetX-e.currentTarget.offsetWidth/2)/e.currentTarget.offsetWidth*10)+"deg) scale3d(1.05, 1.05, 1.05)";
		clearInterval(slideTimeout);
    });
});
