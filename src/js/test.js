window.addEventListener('mousemove', moveCursor);
window.addEventListener('scroll', moveCursorScroll);
window.addEventListener('mousedown', cursorFocus);
window.addEventListener('mouseup', cursorUnfocus);

document.body.addEventListener('mouseleave', hideCursor);

const recolor = target => {
	target.style.background = "green";
}

const recolorBack = target => {
	target.style.background = "black";
}

const recolorp = target => {
	target.style.background = "red";
}

const recolorBackp = target => {
	target.style.background = "gray";
}

window.addEventListener("mousemove", drag);
document.querySelector(".panel1").addEventListener("mousedown", e => {dragAdd(e, ".window1", recolorp, recolor)});
document.querySelector(".panel1").addEventListener("mouseup", e => {leave(e, ".window1", recolorBackp, recolorBack)});
document.querySelector(".panel2").addEventListener("mousedown", e => {dragAdd(e, ".window2", recolorp, recolor)});
document.querySelector(".panel2").addEventListener("mouseup", e => {leave(e, ".window2", recolorBackp, recolorBack)});
document.body.addEventListener("mouseleave", e => {dragList = []});
