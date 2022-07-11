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

const moveUp = (e, target, info) => {
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


document.body.addEventListener("mouseup", e => {leave(e, ".window1")});

test1.addEventListener("mousedown", e => {dragAdd(e, str1, ".window1", undefined, resize, undefined, undefined, winCheck, resizeBack, undefined, true, true, document.querySelector(".window1").offsetWidth/2)});
document.querySelector(".panel1").addEventListener("mousedown", e => {dragAdd(e, ".panel1", ".window1", undefined, moveUp, undefined, undefined, undefined, undefined, attach)});
document.querySelector(".wl1").addEventListener("mousedown", e => {dragAdd(e, ".wl1", ".window1", undefined, undefined, undefined, dragResizeWL, undefined, undefined, undefined, true, false)});
document.querySelector(".wr1").addEventListener("mousedown", e => {dragAdd(e, ".wr1", ".window1", undefined, undefined, undefined, dragResizeWR, undefined, undefined, undefined, false, false)});
document.querySelector(".ht1").addEventListener("mousedown", e => {dragAdd(e, ".ht1", ".window1", undefined, undefined, undefined, dragResizeHT, undefined, undefined, undefined, false, true)});
document.querySelector(".hb1").addEventListener("mousedown", e => {dragAdd(e, ".hb1", ".window1", undefined, undefined, undefined, dragResizeHB, undefined, undefined, undefined, false, false)});
document.querySelector(".whlt1").addEventListener("mousedown", e => {dragAdd(e, ".wl1", ".window1", undefined, undefined, undefined, dragResizeWHLT, undefined, undefined, undefined, true, true)});
document.querySelector(".whrt1").addEventListener("mousedown", e => {dragAdd(e, ".wr1", ".window1", undefined, undefined, undefined, dragResizeWHRT, undefined, undefined, undefined, false, true)});
document.querySelector(".whlb1").addEventListener("mousedown", e => {dragAdd(e, ".ht1", ".window1", undefined, undefined, undefined, dragResizeWHLB, undefined, undefined, undefined, true, false)});
document.querySelector(".whrb1").addEventListener("mousedown", e => {dragAdd(e, ".hb1", ".window1", undefined, undefined, undefined, dragResizeWHRB, undefined, undefined, undefined, false, false)});

window.addEventListener("mouseup", e => {leave(e, ".window1")});

test2.addEventListener("mousedown", e => {dragAdd(e, str2, ".window2", undefined, moveUp, undefined, undefined, undefined, undefined, attach)});
document.body.addEventListener("mouseup", e => {leave(e, ".window2")});
/*
document.body.addEventListener("mouseleave", leaveAll);
*/


var win_num_g = 1;
const makeWindow = (content, icon_src, title, x, y) => {
	var win = document.createElement("div");
	win.classList.add("window");
	win.id = "window"+win_num_g;

	var panel = document.createElement("div");
	panel.classList.add("win-panel");
	panel.classList.add("noselect");
	panel.id = "win-panel"+win_num_g;
	panel.addEventListener("mousedown", e => {dragAdd(e, `#${panel.id}`, `#${win.id}`, undefined, moveUp, undefined, undefined, undefined, undefined, attach)});

	var tab_holder = document.createElement("div");
	tab_holder.classList.add("tab-holder");
	tab_holder.id = "tab-holder"+win_num_g;

	var win_tab = document.createElement("div");
	win_tab.classList.add("win-tab");
	win_tab.id = "win-tab"+win_num_g;
	win_tab.innerHTML = title;

	var tab_add = document.createElement("div");
	tab_add.classList.add("tab-add");
	tab_add.id = "tab-add"+win_num_g;
	tab_add.innerHTML = "+";

	var win_control = document.createElement("div");
	win_control.classList.add("win-control");
	win_control.id = "win-control"+win_num_g;

	var container = document.createElement("div");
	container.classList.add("container");
	container.id = "container"+win_num_g;

	var content_holder = document.createElement("div");
	content_holder.classList.add("content-holder");
	content_holder.id = "content-holder"+win_num_g;

	var wl = document.createElement("div");
	wl.classList.add("wl");
	wl.id = "wl"+win_num_g;
	wl.addEventListener("mousedown", e => {dragAdd(e, `#${wl.id}`, `#${win.id}`, undefined, undefined, undefined, dragResizeWL, undefined, undefined, undefined, true, false)});

	var wr = document.createElement("div");
	wr.classList.add("wr");
	wr.id = "wr"+win_num_g;
	wr.addEventListener("mousedown", e => {dragAdd(e, `#${wr.id}`, `#${win.id}`, undefined, undefined, undefined, dragResizeWR, undefined, undefined, undefined, false, false)});

	var ht = document.createElement("div");
	ht.classList.add("ht");
	ht.id = "ht"+win_num_g;
	ht.addEventListener("mousedown", e => {dragAdd(e, `#${ht.id}`, `#${win.id}`, undefined, undefined, undefined, dragResizeHT, undefined, undefined, undefined, false, true)});

	var hb = document.createElement("div");
	hb.classList.add("hb");
	hb.id = "hb"+win_num_g;
	hb.addEventListener("mousedown", e => {dragAdd(e, `#${hb.id}`, `#${win.id}`, undefined, undefined, undefined, dragResizeHB, undefined, undefined, undefined, false, false)});

	var whlt = document.createElement("div");
	whlt.classList.add("whlt");
	whlt.id = "whlt"+win_num_g;
	whlt.addEventListener("mousedown", e => {dragAdd(e, `#${whlt.id}`, `#${win.id}`, undefined, undefined, undefined, dragResizeWHLT, undefined, undefined, undefined, true, true)});

	var whrt = document.createElement("div");
	whrt.classList.add("whrt");
	whrt.id = "whrt"+win_num_g;
	whrt.addEventListener("mousedown", e => {dragAdd(e, `#${whrt.id}`, `#${win.id}`, undefined, undefined, undefined, dragResizeWHRT, undefined, undefined, undefined, false, true)});

	var whlb = document.createElement("div");
	whlb.classList.add("whlb");
	whlb.id = "whlb"+win_num_g;
	whlb.addEventListener("mousedown", e => {dragAdd(e, `#${whlb.id}`, `#${win.id}`, undefined, undefined, undefined, dragResizeWHLB, undefined, undefined, undefined, true, false)});

	var whrb = document.createElement("div");
	whrb.classList.add("whrb");
	whrb.id = "whrb"+win_num_g;
	whrb.addEventListener("mousedown", e => {dragAdd(e, `#${whrb.id}`, `#${win.id}`, undefined, undefined, undefined, dragResizeWHRB, undefined, undefined, undefined, false, false)});

	window.addEventListener("mouseup", e => {leave(e, `#${win.id}`)});

	/*test1.addEventListener("mousedown", e => {dragAdd(e, str1, ".window1", undefined, resize, undefined, undefined, winCheck, resizeBack, undefined, true, true, document.querySelector(".window1").offsetWidth/2)});*/

	tab_holder.appendChild(win_tab);
	tab_holder.appendChild(tab_add);
	
	panel.appendChild(tab_holder);
	panel.appendChild(win_control);
	
	content_holder.appendChild(content);
	container.appendChild(content_holder);

	win.appendChild(panel);
	win.appendChild(container);
	win.appendChild(wl);
	win.appendChild(wr);
	win.appendChild(hb);
	win.appendChild(ht);
	win.appendChild(whlt);
	win.appendChild(whrt);
	win.appendChild(whlb);
	win.appendChild(whrb);

	return win;
}

window.addEventListener("mousemove", drag);
document.querySelector("html").addEventListener("mouseleave", leaveAll);

document.body.appendChild(makeWindow(document.createElement("div"), undefined, "My Win"));
