const enableCursorMain = e => {
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
		item.addEventListener("mouseover", e => {setCursor(e, 0.9, ["icon-dragged"], undefined, true)});
		item.addEventListener("mousemove", e => {coordinateCursor(e, 20, 0.1, undefined, undefined, ["scale(1.2)"], true)});
		item.addEventListener("mouseout", e => {unsetCursor(e, ["icon-dragged"])});
	});

	document.querySelectorAll(".lang-close").forEach(item => { 
		item.addEventListener("mouseover", e => {setCursor(e, 1.5, ["default-dragged"], undefined, true)});
		item.addEventListener("mousemove", e => {coordinateCursor(e, undefined, undefined, undefined, undefined, undefined. true)});
		item.addEventListener("mouseout", e => {unsetCursor(e, ["default-dragged"])});
	});

	document.querySelectorAll(".footer-icon a").forEach(item => { 
		item.addEventListener("mouseover", e => {setCursor(e, 1.25, ["icon-dragged"], undefined)});
		item.addEventListener("mousemove", e => {coordinateCursor(e, 20, 0.1, undefined, undefined, ["scale(1.05)"])});
		item.addEventListener("mouseout", e => {unsetCursor(e, ["icon-dragged"])});
	});

	document.querySelectorAll(".toggle-theme, .toggle-lang, .menu-download, .github-shortcut").forEach(item => { 
		item.addEventListener("mouseover", e => {setCursor(e, 0.9, ["toggle-dragged"], undefined, true)});
		item.addEventListener("mousemove", e => {coordinateCursor(e, 20, 0.1, undefined, undefined, ["scale(1.2)"], true)});
		item.addEventListener("mouseout", e => {unsetCursor(e, ["toggle-dragged"])});
	});

	document.querySelectorAll(".join-discord a, .view-more a, .footer-text span, footer p a").forEach(item => { 
		item.addEventListener("mouseover", e => {setCursor(e, 1, ["link-dragged"], ["link-active"])});
		item.addEventListener("mousemove", e => {coordinateCursor(e)});
		item.addEventListener("mouseout", e => {unsetCursor(e, ["link-dragged"], ["link-active"])});
	});

	enableCursor();
}

enableCursorMain();

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
