var z_index_g = 1;

const iconify = (e, target, info) => {
	target.lastMinWidth = target.style.minWidth || "350px";
	target.style.minWidth = "initial";
	target.style.width = target.offsetWidth/2+"px";
	target.style.height = target.offsetHeight/2+"px";
	target.style.flexDirection = "row";
	target.querySelector(".win-panel").style.display = "none";
	target.querySelector(".container").style.display = "none";
	target.querySelectorAll(".icon-block").forEach(item => {
		item.style.display = null;
	});
	target.style.zIndex = z_index_g;
	z_index_g += 1;
}

const deiconify = (e, target, info) => {
	target.style.width = target.offsetWidth*2+"px";
	target.style.height = target.offsetHeight*2+"px";
	target.style.minWidth = target.lastMinWidth;
	target.lastMinWidth = undefined;
	target.style.flexDirection = null;
	target.querySelector(".win-panel").style.display = null;
	target.querySelector(".container").style.display = null;
	target.querySelectorAll(".icon-block").forEach(item => {
		item.style.display = "none";
	});
}

const attach = (e, target, info) => {
	target.lastTransform = target.style.transform;
	target.lastWidth = target.offsetWidth;
	target.lastHeight = target.offsetHeight;
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
	if (typeof target.lastWidth == "number" && typeof target.lastHeight == "number" && target.style.left == 0 && target.style.width == "50%" && target.style.height == "100%") {
		target.style.top = null;
		target.style.left = null;
		target.style.width = target.lastWidth+"px";
		target.style.height = target.lastHeight+"px";
		target.style.transform = target.lastTransform;
		target.lastTransform = undefined;
		target.lastWidth = undefined;
		target.lastHeight = undefined;
	}
	else {
		target.lastTransform = target.style.transform;
		target.lastWidth = target.offsetWidth;
		target.lastHeight = target.offsetHeight;
		target.style.top = 0;
		target.style.left = 0;
		target.style.width = "50%";
		target.style.height = "100%";
		target.style.transform = null;
		target.style.zIndex = z_index_g;
		z_index_g += 1;
	}
}

const rightAttach = (e, target) => {
	if (typeof target.lastWidth == "number" && typeof target.lastHeight == "number" && target.style.left == "50%" && target.style.width == "50%" && target.style.height == "100%") {
		target.style.top = null;
		target.style.left = null;
		target.style.width = target.lastWidth+"px";
		target.style.height = target.lastHeight+"px";
		target.style.transform = target.lastTransform;
		target.lastTransform = undefined;
		target.lastWidth = undefined;
		target.lastHeight = undefined;
	}
	else {
		target.lastTransform = target.style.transform;
		target.lastWidth = target.offsetWidth;
		target.lastHeight = target.offsetHeight;
		target.style.top = 0;
		target.style.left = "50%";
		target.style.width = "50%";
		target.style.height = "100%";
		target.style.transform = null;
		target.style.zIndex = z_index_g;
		z_index_g += 1;
	}
}

const fullsize = (e, target) => {
	if (typeof target.lastWidth == "number" && typeof target.lastHeight == "number" && target.style.width == "100%" && target.style.height == "100%") {
		target.style.top = null;
		target.style.left = null;
		target.style.width = target.lastWidth+"px";
		target.style.height = target.lastHeight+"px";
		target.style.transform = target.lastTransform;
		target.lastTransform = undefined;
		target.lastWidth = undefined;
		target.lastHeight = undefined;
	}
	else {
		target.lastTransform = target.style.transform;
		target.lastWidth = target.offsetWidth;
		target.lastHeight = target.offsetHeight;
		target.style.top = 0;
		target.style.left = 0;
		target.style.width = "100%";
		target.style.height = "100%";
		target.style.transform = null;
	}
	target.style.zIndex = z_index_g;
	z_index_g += 1;
}

const minimalize = (e, target) => {
	target.style.display = "none";
}

const closeWindow = (e, target) => {
	document.body.removeChild(target);
}

const hideAllContent = (e, target) => {
	var win = target;
	while (!win.classList.contains("window")) {
		win = win.parentElement;
	}
	win.querySelectorAll(".content-holder").forEach(item => {
		item.style.display = "none";
	});
}

const showContent = (e, target) => {
	target.style.display = null;
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

const dropTransition = (e, target, info) => {
	target.style.transition = null;
	var win = target;
	while (!win.classList.contains("window")) {
		win = win.parentElement;
	}
	win.style.zIndex = z_index_g;
	z_index_g += 1;
}

const remakeWindow = (e, target, info) => {
	var win = target;
	while (!win.classList.contains("window")) {
		win = win.parentElement;
	}

	var targetTransformX = 0;
	var targetTransformY = 0;
	if (win.style.transform != '') {
	
		var nums = win.style.transform.split("translate3d")[1];
		nums = nums.slice(1, nums.length-1).split("px,");
		
		targetTransformX = parseInt(nums[0]);
		targetTransformY = parseInt(nums[1]);
	}

	var x1 = win.offsetLeft+targetTransformX;
	var x2 = x1+win.offsetWidth;
	var y1 = win.offsetTop+targetTransformY;
	var y2 = y1+win.offsetHeight;

	var id_num = target.id.match("[0-9]+");
	var target_content_holder = win.querySelector("#content-holder"+id_num);
	var icon_block = win.querySelector("#icon-block"+id_num);
	var icon_src = icon_block.querySelector("img").src;


	if (x1, x2, y1, y2, x1 <= e.clientX && e.clientX <= x2 && y1 <= e.clientY && e.clientY <= y2) {
		var container = win.querySelector(".container");

		var container_x1 = x1 + container.offsetLeft;
		var container_x2 = container_x1 + container.offsetWidth;
		var container_y1 = y1 + container.offsetTop;
		var container_y2 = container_y1 + container.offsetHeight;
		
		if (container_x1 <= e.clientX && e.clientX <= container_x2 && container_y1 <= e.clientY && e.clientY <= container_y2) {
			win.querySelector("#content-holder"+id_num).style.display = null;
		}
		target.style.transition = "background-color 0.1s ease-in-out, transform 0.1s ease-in-out";
		target.style.transform = null;
	}
	else {
		
		var highestWin = "";
		document.querySelectorAll(".window").forEach(item => {
			if (win != item) {
				var targetTransformX = 0;
				var targetTransformY = 0;
				if (item.style.transform != '') {
				
					var nums = item.style.transform.split("translate3d")[1];
					nums = nums.slice(1, nums.length-1).split("px,");
					
					targetTransformX = parseInt(nums[0]);
					targetTransformY = parseInt(nums[1]);
				}

				x1 = item.offsetLeft+targetTransformX;
				x2 = x1+item.offsetWidth;
				y1 = item.offsetTop+targetTransformY;
				y2 = y1+item.offsetHeight;
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

		if (!highestWin) {

			document.body.appendChild(makeWindow(target_content_holder.firstChild || document.createElement("div"), icon_src, target.innerHTML));

			target.parentElement.removeChild(target);
			icon_block.parentElement.removeChild(icon_block);
			target_content_holder.parentElement.removeChild(target_content_holder);
		}
		else {
			win.style.minWidth = (win.querySelector(".tab-holder").children.length-1)*150+180+"px";

			var winPanel = highestWin.querySelector(".win-panel");
			
			var panel_x1 = x1 + winPanel.offsetLeft;
			var panel_x2 = panel_x1 + winPanel.offsetWidth;
			var panel_y1 = y1 + winPanel.offsetTop;
			var panel_y2 = panel_y1 + winPanel.offsetHeight;
			
			target.style.transform = null;
			highestWin.querySelector(".tab-holder").insertBefore(target, highestWin.querySelector(".tab-add"));

			if (!target.hasDrag) {
				target.hasDrag = true;
				target.addEventListener("mousedown", e => {
					dragAdd(e, `#${target.id}`, `#${target.id}`, undefined, dropTransition, undefined, undefined, undefined, remakeWindow);
				});
				window.addEventListener("mouseup", e => {leave(e, `#${target.id}`)});
			}

			if (panel_x1 <= e.clientX && e.clientX <= panel_x2 && panel_y1 <= e.clientY && e.clientY <= panel_y2) {
				target_content_holder.style.display = "none";
			}
			else {
				target_content_holder.style.display = null;
			}

			highestWin.querySelector(".container").appendChild(target_content_holder);

		
			icon_block.style.display = "none";
			highestWin.insertBefore(icon_block, highestWin.querySelector(".wl"));
		
			highestWin.style.minWidth = (highestWin.querySelector(".tab-holder").children.length-1)*150+180+"px";
			highestWin.style.zIndex = z_index_g;
			z_index_g += 1;
		}
		win.style.minWidth = (win.querySelector(".tab-holder").children.length-1)*150+200+"px";
	}
}

const insertCheck = (e, target, info) => {
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
			var targetTransformX = 0;
			var targetTransformY = 0;
		if (highestWin.style.transform != '') {
		
			var nums = highestWin.style.transform.split("translate3d")[1];
			nums = nums.slice(1, nums.length-1).split("px,");
			
			targetTransformX = parseInt(nums[0]);
			targetTransformY = parseInt(nums[1]);
		}

		var x1 = highestWin.offsetLeft+targetTransformX;
		var x2 = x1+highestWin.offsetWidth;
		var y1 = highestWin.offsetTop+targetTransformY;
		var y2 = y1+highestWin.offsetHeight;

		var winPanel = highestWin.querySelector(".win-panel");
		
		var panel_x1 = x1 + winPanel.offsetLeft;
		var panel_x2 = panel_x1 + winPanel.offsetWidth;
		var panel_y1 = y1 + winPanel.offsetTop;
		var panel_y2 = panel_y1 + winPanel.offsetHeight;
		
		var win = document.querySelector(info.target);
		
		win.querySelectorAll(".win-tab").forEach(item => {
			highestWin.querySelector(".tab-holder").insertBefore(item, highestWin.querySelector(".tab-add"));

			if (!item.hasDrag) {
				item.hasDrag = true;
				item.addEventListener("mousedown", e => {
					dragAdd(e, `#${item.id}`, `#${item.id}`, undefined, dropTransition, undefined, undefined, undefined, remakeWindow);
				});
				window.addEventListener("mouseup", e => {leave(e, `#${item.id}`)});
			}

		});

		win.querySelectorAll(".content-holder").forEach(item => {
			if (panel_x1 <= e.clientX && e.clientX <= panel_x2 && panel_y1 <= e.clientY && e.clientY <= panel_y2 || false) {
				item.style.display = "none";
			}
			highestWin.querySelector(".container").appendChild(item);
		});
		
		win.querySelectorAll(".icon-block").forEach(item => {
			item.style.display = "none";
			highestWin.insertBefore(item, highestWin.querySelector(".wl"));
		});
		
		closeWindow(e, win);

		highestWin.style.minWidth = (highestWin.querySelector(".tab-holder").children.length-1)*150+180+"px";
		highestWin.style.zIndex = z_index_g;
		z_index_g += 1;
	}
}

const moveUp = (e, target, info) => {
	target.style.zIndex = z_index_g;
	z_index_g += 1;
}


// W I N D O W  G E N E R A T O R

var win_num_g = 1;
const makeWindow = (content, icon_src, title, extraClass, x, y) => {
	var win = document.createElement("div");
	win.classList.add("window");
	win.id = "window"+win_num_g;
	win.style.zIndex = z_index_g;
	z_index_g += 1;
	win.setAttribute('draggable', false);
	if (extraClass) {
		extraClass.forEach(item => {
			win.classList.add(item);
		});
	}

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
	win_tab.addEventListener("click", e => {click(e, `#${content_holder.id}`, hideAllContent, showContent)});

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

	var split_left = document.createElement("div");
	split_left.classList.add("split-left");
	split_left.id = "split-left"+win_num_g;
	split_left.addEventListener("click", e => {click(e, `#${win.id}`, undefined, leftAttach)});
	var split_left_img = document.createElement("img");
	split_left_img.src = "src/images/demo/icons/Frame/SplitLeft.png";
	split_left_img.setAttribute('draggable', false);
	split_left.appendChild(split_left_img);

	var win_insert = document.createElement("div");
	win_insert.classList.add("win-insert");
	win_insert.id = "win-insert"+win_num_g;
	win_insert.addEventListener("mousedown", e => {dragAdd(e, `#${win_insert.id}`, `#${win.id}`, undefined, iconify, undefined, undefined, insertCheck, deiconify, attach, true, true, win.offsetWidth/2)});
	var win_insert_img = document.createElement("img");
	win_insert_img.src = "src/images/demo/icons/Frame/Multitask.png";
	win_insert_img.setAttribute('draggable', false);
	win_insert.appendChild(win_insert_img);

	var split_right = document.createElement("div");
	split_right.classList.add("split-right");
	split_right.id = "split-right"+win_num_g;
	split_right.addEventListener("click", e => {click(e, `#${win.id}`, undefined, rightAttach)});
	var split_right_img = document.createElement("img");
	split_right_img.src = "src/images/demo/icons/Frame/SplitRight.png";
	split_right_img.setAttribute('draggable', false);
	split_right.appendChild(split_right_img);

	var win_control = document.createElement("div");
	win_control.classList.add("win-control");
	win_control.id = "win-control"+win_num_g;

	var win_fullsize = document.createElement("div");
	win_fullsize.classList.add("win-fullsize");
	win_fullsize.id = "win-fullsize"+win_num_g;
	win_fullsize.addEventListener("click", e => {click(e, `#${win.id}`, undefined, fullsize)});
	var win_fullsize_img = document.createElement("img");
	win_fullsize_img.src = "src/images/demo/icons/Frame/Maximize.png";
	win_fullsize_img.setAttribute('draggable', false);
	win_fullsize.appendChild(win_fullsize_img);

	var win_minimalize = document.createElement("div");
	win_minimalize.classList.add("win-minimalize");
	win_minimalize.id = "win-minimalize"+win_num_g;
	win_minimalize.addEventListener("click", e => {click(e, `#${win.id}`, undefined, minimalize)});
	var win_minimalize_img = document.createElement("img");
	win_minimalize_img.src = "src/images/demo/icons/Frame/Minimize.png";
	win_minimalize_img.setAttribute('draggable', false);
	win_minimalize.appendChild(win_minimalize_img);

	var win_close = document.createElement("div");
	win_close.classList.add("win-close");
	win_close.id = "win-close"+win_num_g;
	win_close.addEventListener("click", e => {click(e, `#${win.id}`, undefined, closeWindow)});
	var win_close_img = document.createElement("img");
	win_close_img.src = "src/images/demo/icons/Frame/Close.png";
	win_close_img.setAttribute('draggable', false);
	win_close.appendChild(win_close_img);

	var container = document.createElement("div");
	container.classList.add("container");
	container.id = "container"+win_num_g;

	var content_holder = document.createElement("div");
	content_holder.classList.add("content-holder");
	content_holder.id = "content-holder"+win_num_g;

	var icon_block = document.createElement("div");
	icon_block.classList.add("icon-block");
	icon_block.style.display = "none";
	icon_block.id = "icon-block"+win_num_g;
	var icon = document.createElement("img");
	icon.src = icon_src || "src/images/demo/icons/Apps/TextEditor.png";
	icon.setAttribute('draggable', false);
	icon.classList.add("noselect");
	icon.id = "icon"+win_num_g;
	icon_block.appendChild(icon);

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

	win_resizers.appendChild(split_left);
	win_resizers.appendChild(win_insert);
	win_resizers.appendChild(split_right);

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
	win.appendChild(icon_block);
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

const appBarGeneration = icon_list => {
	
}

// W I N D O W S

var content1 = document.createElement("div");
content1.innerHTML = "Hi";

var content2 = document.createElement("div");
content2.innerHTML = "Hello";

var content3 = document.createElement("div");
content3.innerHTML = "Test3";

content1.classList.add("noselect");
content2.classList.add("noselect");
content3.classList.add("noselect");

document.body.appendChild(makeWindow(content1, "src/images/demo/icons/Apps/Calculator.png", "AvdanWeb"));
document.body.appendChild(makeWindow(content2, "src/images/demo/icons/Apps/Calendar.png", "AvdanWeb2"));
document.body.appendChild(makeWindow(content2, "src/images/demo/icons/Apps/AfterEffects.png", "Test3"));
