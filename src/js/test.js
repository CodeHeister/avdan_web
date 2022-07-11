var z_index_g = 1;

const resize = (e, target, info) => {
	target.style.width = target.offsetWidth/2+"px";
	target.style.height = target.offsetHeight/2+"px";
	target.style.zIndex = z_index_g;
	z_index_g += 1;
}

const resizeBack = (e, target, info) => {
	target.style.width = target.offsetWidth*2+"px";
	target.style.height = target.offsetHeight*2+"px";
}

const recolorp = (e, target, info) => {
}

const recolorBackp = (e, target, info) => {
}

const recolor = (e, target, info) => {
	target.style.zIndex = z_index_g;
	z_index_g += 1;
}

const recolorBack = (e, target, info) => {
}

const attach = (e, target, info) => {
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

const dragResizeWL = (e, target, info) => {
	target.style.width = `${target.clientWidth-e.movementX}px`;
}

const dragResizeWR = (e, target, info) => {
	target.style.width = `${target.clientWidth+e.movementX}px`;
}

const dragResizeHT = (e, target, info) => {
	target.style.height = `${target.clientHeight-e.movementY}px`;
}

const dragResizeHB = (e, target, info) => {
	target.style.height = `${target.clientHeight+e.movementY}px`;
}

const dragResizeWHLT = (e, target, info) => {
	target.style.width = `${target.clientWidth-e.movementX}px`;
	target.style.height = `${target.clientHeight-e.movementY}px`;
}

const dragResizeWHRT = (e, target, info) => {
	target.style.width = `${target.clientWidth+e.movementX}px`;
	target.style.height = `${target.clientHeight-e.movementY}px`;
}

const dragResizeWHLB = (e, target, info) => {
	target.style.width = `${target.clientWidth-e.movementX}px`;
	target.style.height = `${target.clientHeight+e.movementY}px`;
}

const dragResizeWHRB = (e, target, info) => {
	target.style.width = `${target.clientWidth+e.movementX}px`;
	target.style.height = `${target.clientHeight+e.movementY}px`;
}

const winCheck = (e, target, info) => {
	document.querySelectorAll(".window").forEach(item => {
		if (document.querySelector(info.target) != item) {
			var targetTransformX = 0;
			var targetTransformY = 0;
			if (item.style.transform != '') {
			
				var nums = item.style.transform.split("translate3d")[1];
				nums = nums.slice(1, nums.length-1).split("px,");
				
				targetTransformX = parseInt(nums[0]);
				targetTransformY = parseInt(nums[1]);
			}

			var x1 = item.offsetLeft+targetTransformX;
			var x2 = x1+item.offsetWidth;
			var y1 = item.offsetTop+targetTransformY;
			var y2 = y1+item.offsetHeight;
			console.log(x1, x2, y1, y2, x1 <= e.clientX && e.clientX <= x2 && y1 <= e.clientY && e.clientY <= y2);
		}
	});
}

var str1 = ".resize1";
var test1 = document.querySelector(str1);
var str2 = ".panel2";
var test2 = document.querySelector(str2);

window.addEventListener("mousemove", drag);

document.body.addEventListener("mouseup", e => {leave(e, ".window1")});

test1.addEventListener("mousedown", e => {dragAdd(e, str1, ".window1", undefined, resize, undefined, undefined, winCheck, resizeBack, undefined, true, true, document.querySelector(".window1").offsetWidth/2)});
document.querySelector(".panel1").addEventListener("mousedown", e => {dragAdd(e, ".panel1", ".window1", undefined, undefined, undefined, undefined, undefined, undefined, attach)});
document.querySelector(".wl1").addEventListener("mousedown", e => {dragAdd(e, ".wl1", ".window1", undefined, undefined, undefined, dragResizeWL, undefined, undefined, undefined, true, false)});
document.querySelector(".wr1").addEventListener("mousedown", e => {dragAdd(e, ".wr1", ".window1", undefined, undefined, undefined, dragResizeWR, undefined, undefined, undefined, false, false)});
document.querySelector(".ht1").addEventListener("mousedown", e => {dragAdd(e, ".ht1", ".window1", undefined, undefined, undefined, dragResizeHT, undefined, undefined, undefined, false, true)});
document.querySelector(".hb1").addEventListener("mousedown", e => {dragAdd(e, ".hb1", ".window1", undefined, undefined, undefined, dragResizeHB, undefined, undefined, undefined, false, false)});
document.querySelector(".whlt1").addEventListener("mousedown", e => {dragAdd(e, ".wl1", ".window1", undefined, undefined, undefined, dragResizeWHLT, undefined, undefined, undefined, true, true)});
document.querySelector(".whrt1").addEventListener("mousedown", e => {dragAdd(e, ".wr1", ".window1", undefined, undefined, undefined, dragResizeWHRT, undefined, undefined, undefined, false, true)});
document.querySelector(".whlb1").addEventListener("mousedown", e => {dragAdd(e, ".ht1", ".window1", undefined, undefined, undefined, dragResizeWHLB, undefined, undefined, undefined, true, false)});
document.querySelector(".whrb1").addEventListener("mousedown", e => {dragAdd(e, ".hb1", ".window1", undefined, undefined, undefined, dragResizeWHRB, undefined, undefined, undefined, false, false)});

document.body.addEventListener("mouseup", e => {leave(e, ".window1")});

test2.addEventListener("mousedown", e => {dragAdd(e, str2, ".window2", undefined, undefined, undefined, undefined, undefined, undefined, attach)});
document.body.addEventListener("mouseup", e => {leave(e, ".window2")});
document.querySelector("html").addEventListener("mouseleave", leaveAll);
/*
document.body.addEventListener("mouseleave", leaveAll);
*/
