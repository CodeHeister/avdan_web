const sizeDiscord = () => {
	document.querySelector(".discord-list iframe").height = 0;
	document.querySelector(".discord-list iframe").height = document.querySelector(".github-list").offsetHeight+"px";
}

window.addEventListener("resize", e => {
	sizeDiscord();
});

const enableCursor = e => {
	document.querySelectorAll('iframe').forEach(item => {
		item.addEventListener("mouseover", e => { cursor.style.opacity = "0"; });	
		item.addEventListener("mouseout", e => { cursor.style.opacity = null; });
	});

	window.addEventListener('mousemove', moveCursor);
	window.addEventListener('scroll', moveCursorScroll);
	window.addEventListener('mousedown', cursorFocus);
	window.addEventListener('mouseup', cursorUnfocus);

	document.body.addEventListener('mouseleave', hideCursor);

	document.querySelectorAll(".map-item a").forEach(item => { 
		item.addEventListener("mouseover", e => {setCursor(e, 1, ["default-dragged"], ["map-item-active"], true)});
		item.addEventListener("mousemove", e => {coordinateCursor(e, 20, 0.1, undefined, undefined, ["scale(1.1)"], true)});
		item.addEventListener("mouseout", e => {unsetCursor(e, ["default-dragged"], ["map-item-active"])});
	});

	document.querySelectorAll(".icon").forEach(item => { 
		item.addEventListener("mouseover", e => {setCursor(e, 0.9, ["default-dragged"], undefined, true)});
		item.addEventListener("mousemove", e => {coordinateCursor(e, 20, 0.1, undefined, undefined, ["scale(1.2)"], true)});
		item.addEventListener("mouseout", e => {unsetCursor(e, ["default-dragged"])});
	});

	document.querySelectorAll(".lang-close").forEach(item => { 
		item.addEventListener("mouseover", e => {setCursor(e, 1.5, ["default-dragged"], undefined, true)});
		item.addEventListener("mousemove", e => {coordinateCursor(e, undefined, undefined, undefined, undefined, undefined. true)});
		item.addEventListener("mouseout", e => {unsetCursor(e, ["default-dragged"])});
	});

	document.querySelectorAll(".footer-icon a").forEach(item => { 
		item.addEventListener("mouseover", e => {setCursor(e, 1.2, ["default-dragged"], undefined)});
		item.addEventListener("mousemove", e => {coordinateCursor(e, 20, 0.1, undefined, undefined)});
		item.addEventListener("mouseout", e => {unsetCursor(e, ["default-dragged"])});
	});

	document.querySelectorAll(".toggle-theme, .toggle-lang, .menu-download").forEach(item => { 
		item.addEventListener("mouseover", e => {setCursor(e, 0.9, ["toggle-dragged"], undefined, true)});
		item.addEventListener("mousemove", e => {coordinateCursor(e, 20, 0.1, undefined, undefined, ["scale(1.2)"], true)});
		item.addEventListener("mouseout", e => {unsetCursor(e, ["toggle-dragged"])});
	});

	document.querySelectorAll(".join-discord a, .view-more a, .footer-text span, footer p a").forEach(item => { 
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
			cursorIcon.appendChild(text);
		});
		item.addEventListener("mouseout", e => {
			cursorIcon.style.width = null;
			cursorIcon.style.height = null;
			cursorIcon.style.display = null;
			cursorIcon.style.borderRadius = null;
			cursorIcon.style.overflow = null;
			cursorIcon.style.alignItems = null;
			cursorIcon.innerHTML = "";
		});
	});
}

enableCursor();

document.querySelector(".toggle-lang").addEventListener("click", e => {
	document.querySelector(".language-window").style.display = "flex";
});

document.querySelector(".lang-panel svg").addEventListener("click", e => {
	document.querySelector(".language-window").style.display = null;
});

/*
document.querySelector(".toggle-cursor").addEventListener("click", enableCursor);
*/

/*
var iDoc = iframe.contentWindow     // sometimes glamorous naming of variable
        || iframe.contentDocument;  // makes your code working :)
if (iDoc.document) {
	iDoc = iDoc.document;
	console.log(iDoc.querySelector("html"));
	iDoc.querySelector("html").addEventListener('mousemove', e => {
                        console.log('works');
                });
	iDoc.querySelector("body").addEventListener('mousemove', e => {
                        console.log('works');
                });
};
*/
