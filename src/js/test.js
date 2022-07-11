var z_index_g = 1;

const resize = (e, target) => {
	target.style.top = 0;
	target.style.left = 0;
	target.style.width = "100%";
	target.style.height = "100%";
	target.style.transform = null;
	target.style.zIndex = z_index_g;
	z_index_g += 1;
}

const resizeBack = (e, target) => {
	target.style.background = "black";
	target.style.height = "500px";
	target.style.width = "512px";
}

const recolorp = (e, target) => {
}

const recolorBackp = (e, target) => {
}

const recolor = (e, target) => {
	target.style.zIndex = z_index_g;
	z_index_g += 1;
}

const recolorBack = (e, target) => {
}

const attach = (e, target) => {
	if (e.screenX > window.innerWidth/2) {
		target.style.top = 0;
		target.style.left = "50%";
		target.style.width = "50%";
		target.style.height = "100%";
		target.style.transform = null;
		target.style.zIndex = z_index_g;
		z_index_g += 1;
	}
	else {
		target.style.top = 0;
		target.style.left = 0;
		target.style.width = "50%";
		target.style.height = "100%";
		target.style.transform = null;
		target.style.zIndex = z_index_g;
		z_index_g += 1;
	}
}

const dragResizeWL = (e, target) => {
	target.style.width = `${target.clientWidth-e.movementX}px`;
}

const dragResizeWR = (e, target) => {
	target.style.width = `${target.clientWidth+e.movementX}px`;
}

const dragResizeHT = (e, target) => {
	target.style.height = `${target.clientHeight-e.movementY}px`;
}

const dragResizeHB = (e, target) => {
	target.style.height = `${target.clientHeight+e.movementY}px`;
}

const dragResizeWHLT = (e, target) => {
	target.style.width = `${target.clientWidth-e.movementX}px`;
	target.style.height = `${target.clientHeight-e.movementY}px`;
}

const dragResizeWHRT = (e, target) => {
	target.style.width = `${target.clientWidth+e.movementX}px`;
	target.style.height = `${target.clientHeight-e.movementY}px`;
}

const dragResizeWHLB = (e, target) => {
	target.style.width = `${target.clientWidth-e.movementX}px`;
	target.style.height = `${target.clientHeight+e.movementY}px`;
}

const dragResizeWHRB = (e, target) => {
	target.style.width = `${target.clientWidth+e.movementX}px`;
	target.style.height = `${target.clientHeight+e.movementY}px`;
}

var str1 = ".resize1";
var test1 = document.querySelector(str1);
var str2 = ".panel2";
var test2 = document.querySelector(str2);

window.addEventListener("mousemove", drag);

test1.addEventListener("click", e => {click(e, ".window1", undefined, resize)});
document.body.addEventListener("mouseup", e => {leave(e, ".window1")});

document.querySelector(".panel1").addEventListener("mousedown", e => {dragAdd(e, ".panel1", ".window1", recolorp, recolor, undefined, undefined, recolorBackp, resizeBack, attach)});
document.querySelector(".wl1").addEventListener("mousedown", e => {dragAdd(e, ".wl1", ".window1", undefined, undefined, undefined, dragResizeWL, undefined, undefined, undefined, true, false)});
document.querySelector(".wr1").addEventListener("mousedown", e => {dragAdd(e, ".wr1", ".window1", undefined, undefined, undefined, dragResizeWR, undefined, undefined, undefined, false, false)});
document.querySelector(".ht1").addEventListener("mousedown", e => {dragAdd(e, ".ht1", ".window1", undefined, undefined, undefined, dragResizeHT, undefined, undefined, undefined, false, true)});
document.querySelector(".hb1").addEventListener("mousedown", e => {dragAdd(e, ".hb1", ".window1", undefined, undefined, undefined, dragResizeHB, undefined, undefined, undefined, false, false)});
document.querySelector(".whlt1").addEventListener("mousedown", e => {dragAdd(e, ".wl1", ".window1", undefined, undefined, undefined, dragResizeWHLT, undefined, undefined, undefined, true, true)});
document.querySelector(".whrt1").addEventListener("mousedown", e => {dragAdd(e, ".wr1", ".window1", undefined, undefined, undefined, dragResizeWHRT, undefined, undefined, undefined, false, true)});
document.querySelector(".whlb1").addEventListener("mousedown", e => {dragAdd(e, ".ht1", ".window1", undefined, undefined, undefined, dragResizeWHLB, undefined, undefined, undefined, true, false)});
document.querySelector(".whrb1").addEventListener("mousedown", e => {dragAdd(e, ".hb1", ".window1", undefined, undefined, undefined, dragResizeWHRB, undefined, undefined, undefined, false, false)});

document.body.addEventListener("mouseup", e => {leave(e, ".window1")});

test2.addEventListener("mousedown", e => {dragAdd(e, str2, ".window2", recolorp, recolor, undefined, undefined, recolorBackp, resizeBack, attach)});
document.body.addEventListener("mouseup", e => {leave(e, ".window2")});
document.querySelector("html").addEventListener("mouseleave", leaveAll);
/*
document.body.addEventListener("mouseleave", leaveAll);
*/
