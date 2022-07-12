var z_index_g = 1;

const resize = (e, target, info) => {
	target.style.width = target.offsetWidth/2+"px";
	target.style.height = target.offsetHeight/2+"px";
	target.querySelector(".win-panel").style.display = "none";
	target.style.zIndex = z_index_g;
	z_index_g += 1;
}

const resizeBack = (e, target, info) => {
	target.style.width = target.offsetWidth*2+"px";
	target.style.height = target.offsetHeight*2+"px";
	target.querySelector(".win-panel").style.display = null;
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


const leftAttach = (e, target) => {
	target.style.top = 0;
	target.style.left = 0;
	target.style.width = "50%";
	target.style.height = "100%";
	target.style.transform = null;
	target.style.zIndex = z_index_g;
	z_index_g += 1;
}

const rightAttach = (e, target) => {
	target.style.top = 0;
	target.style.left = "50%";
	target.style.width = "50%";
	target.style.height = "100%";
	target.style.transform = null;
	target.style.zIndex = z_index_g;
	z_index_g += 1;
}

const fullsize = (e, target) => {
	target.style.top = 0;
	target.style.left = 0;
	target.style.width = "100%";
	target.style.height = "100%";
	target.style.transform = null;
	target.style.zIndex = z_index_g;
	z_index_g += 1;
}

const minimalize = (e, target) => {
	target.style.display = "none";
}

const closeWindow = (e, target) => {
	document.body.removeChild(target);
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
	var highestWin = "";
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
			if (x1, x2, y1, y2, x1 <= e.clientX && e.clientX <= x2 && y1 <= e.clientY && e.clientY <= y2) {
				if (highestWin == "") { 
					highestWin = item;
				}
				else {
					highestWin = (highestWin.style.zIndex > item.style.zIndex) && highestWin || item;
				}
			}
		}
	});
	if (highestWin != "") { 
		var win = document.querySelector(info.target);
		win.querySelectorAll(".win-tab").forEach(item => {
			highestWin.querySelector(".tab-holder").insertBefore(item, highestWin.querySelector(".tab-add"));
		});
		closeWindow(e, win);
	}
}


var win_num_g = 1;
const makeWindow = (content, icon_src, title, x, y) => {
	var win = document.createElement("div");
	win.classList.add("window");
	win.id = "window"+win_num_g;
	win.setAttribute('draggable', false);

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

	var win_panel_buttons = document.createElement("div");
	win_panel_buttons.classList.add("win-panel-buttons");
	win_panel_buttons.id = "win-panel-buttons"+win_num_g;

	var win_resizers = document.createElement("div");
	win_resizers.classList.add("win-resizers");
	win_resizers.id = "win-resizers"+win_num_g;

	var left_attach = document.createElement("div");
	left_attach.classList.add("left-attach");
	left_attach.id = "left-attach"+win_num_g;
	left_attach.addEventListener("click", e => {click(e, `#${win.id}`, undefined, leftAttach)});

	var win_insert = document.createElement("div");
	win_insert.classList.add("win-insert");
	win_insert.id = "win-insert"+win_num_g;
	win_insert.addEventListener("mousedown", e => {dragAdd(e, `#${win_insert.id}`, `#${win.id}`, undefined, resize, undefined, undefined, winCheck, resizeBack, undefined, true, true, win.offsetWidth/2)});

	var right_attach = document.createElement("div");
	right_attach.classList.add("right-attach");
	right_attach.id = "right-attach"+win_num_g;
	right_attach.addEventListener("click", e => {click(e, `#${win.id}`, undefined, rightAttach)});

	var win_control = document.createElement("div");
	win_control.classList.add("win-control");
	win_control.id = "win-control"+win_num_g;

	var win_fullsize = document.createElement("div");
	win_fullsize.classList.add("win-fullsize");
	win_fullsize.id = "win-fullsize"+win_num_g;
	win_fullsize.addEventListener("click", e => {click(e, `#${win.id}`, undefined, fullsize)});

	var win_minimalize = document.createElement("div");
	win_minimalize.classList.add("win-minimalize");
	win_minimalize.id = "win-minimalize"+win_num_g;
	win_minimalize.addEventListener("click", e => {click(e, `#${win.id}`, undefined, minimalize)});

	var win_close = document.createElement("div");
	win_close.classList.add("win-close");
	win_close.id = "win-close"+win_num_g;
	win_close.addEventListener("click", e => {click(e, `#${win.id}`, undefined, closeWindow)});

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


	tab_holder.appendChild(win_tab);
	tab_holder.appendChild(tab_add);

	win_resizers.appendChild(left_attach);
	win_resizers.appendChild(win_insert);
	win_resizers.appendChild(right_attach);

	win_control.appendChild(win_fullsize);
	win_control.appendChild(win_minimalize);
	win_control.appendChild(win_close);

	win_panel_buttons.appendChild(win_resizers);
	win_panel_buttons.appendChild(win_control);
	
	panel.appendChild(tab_holder);
	panel.appendChild(win_panel_buttons);
	
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

	win_num_g += 1;
	return win;
}

window.addEventListener("mousemove", drag);
document.querySelector("html").addEventListener("mouseleave", leaveAll);

document.body.appendChild(makeWindow(document.createElement("div"), undefined, "My Win"));
