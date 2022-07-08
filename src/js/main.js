const sizeDiscord = () => {
	document.querySelector(".discord-list iframe").height = 0;
	document.querySelector(".discord-list iframe").height = document.querySelector(".github-list").offsetHeight+"px";
}

window.addEventListener("resize", e => {
	sizeDiscord();
});

const enableCursor = e => {
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

	document.querySelectorAll(".demo-button, .download-button, .repo-info").forEach(item => { 
		item.addEventListener("mouseover", e => {setCursor(e, 0.2, ["button-dragged"])});
		item.addEventListener("mousemove", e => {coordinateCursor(e, undefined, undefined, undefined, undefined, ["scale(1.15)"])});
		item.addEventListener("mouseout", e => {unsetCursor(e, ["button-dragged"])});
	});
}
/*
var iframe = document.querySelector('iframe'),
    iDoc = iframe.contentWindow     // sometimes glamorous naming of variable
        || iframe.contentDocument;  // makes your code working :)
if (iDoc.document) {
    iDoc = iDoc.document;
	console.log(iDoc);
	iDoc.body.addEventListener('mouseover', e => {
                        console.log('works');
                });
};
*/

enableCursor();
/*
document.querySelector(".toggle-cursor").addEventListener("click", enableCursor);
*/
