var z_index_g = 1; // global z-index counter

// -- W I N D O W  C O N T R O L

// on insert window drag
const iconify = (e, target, info) => {
	target.lastMinWidth = target.style.minWidth || "450px";
	target.style.minWidth = "initial";
	target.style.minHeight = "initial";
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

// on insert window drop
const deiconify = (e, target, info) => {
	target.style.width = target.offsetWidth*2+"px";
	target.style.height = target.offsetHeight*2+"px";
	target.style.minWidth = target.lastMinWidth;
	target.style.minHeight = null;
	target.lastMinWidth = undefined;
	target.style.flexDirection = null;
	target.querySelector(".win-panel").style.display = null;
	target.querySelector(".container").style.display = null;
	target.querySelectorAll(".icon-block").forEach(item => {
		item.style.display = "none";
	});
}

// on going out of bounds 
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
	}
	else {
		target.style.top = 0;
		target.style.left = 0;
		target.style.width = "50%";
		target.style.height = "100%";
		target.style.transform = null;
	}
	target.style.zIndex = z_index_g;
	z_index_g += 1;
}

// left attach button on click
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
	}
	target.style.zIndex = z_index_g;
	z_index_g += 1;
}

// left attach button on click
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
	}
	target.style.zIndex = z_index_g;
	z_index_g += 1;
}

// fullsize button on click
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

// minimalize button on click 
const minimalize = (e, target) => {
	var underline = document.querySelector("#underline"+target.id.match("[0-9]+")[0]);
	underline.style.backgroundColor = "var(--light-bg)";
	target.style.display = "none";
}

// close button on click
const closeWindow = (e, target) => {
	document.body.removeChild(target);
	var underline = document.querySelector("#underline"+target.id.match("[0-9]+"));
	underline.parentElement.removeChild(underline);
}

// E X T R A  F O R  T A B S  C L I C K

// on win tab click
const hideAllContent = (e, target) => {
	var win = target;
	while (!win.classList.contains("window")) {
		win = win.parentElement;
	}
	win.querySelectorAll(".content-holder").forEach(item => {
		item.style.display = "none";
	});
}

// on win tab click (show win tab binded content)
const showContent = (e, target) => {
	target.style.display = null;
}

// R E S I Z E R S

// width left side
const dragResizeWL = (e, target, info) => {
	target.style.width = `${target.clientWidth-e.movementX}px`;
}

// width right side
const dragResizeWR = (e, target, info) => {
	target.style.width = `${target.clientWidth+e.movementX}px`;
}

// height top
const dragResizeHT = (e, target, info) => {
	target.style.height = `${target.clientHeight-e.movementY}px`;
}

// height bottom
const dragResizeHB = (e, target, info) => {
	target.style.height = `${target.clientHeight+e.movementY}px`;
}

// width height left top
const dragResizeWHLT = (e, target, info) => {
	target.style.width = `${target.clientWidth-e.movementX}px`;
	target.style.height = `${target.clientHeight-e.movementY}px`;
}

// width height right top
const dragResizeWHRT = (e, target, info) => {
	target.style.width = `${target.clientWidth+e.movementX}px`;
	target.style.height = `${target.clientHeight-e.movementY}px`;
}

// width height left bottom
const dragResizeWHLB = (e, target, info) => {
	target.style.width = `${target.clientWidth-e.movementX}px`;
	target.style.height = `${target.clientHeight+e.movementY}px`;
}

// width height right bottom
const dragResizeWHRB = (e, target, info) => {
	target.style.width = `${target.clientWidth+e.movementX}px`;
	target.style.height = `${target.clientHeight+e.movementY}px`;
}

// on drag start (tabs)
const dropTransition = (e, target, info) => {
	target.style.transition = "none";
	var win = target;
	while (!win.classList.contains("window")) {
		win = win.parentElement;
	}
	win.style.zIndex = z_index_g;
	z_index_g += 1;
}

// R E C R E A T I O N  C H E C K  O N  T A B  O U T

// on tab in/out drop
const remakeWindow = (e, target, info) => {

	// get current window
	var win = target;
	while (!win.classList.contains("window")) {
		win = win.parentElement;
	}

	// get current window translate
	var targetTransformX = 0;
	var targetTransformY = 0;
	if (win.style.transform != '') {
	
		var nums = win.style.transform.split("translate3d")[1];
		nums = nums.slice(1, nums.length-1).split("px,");
		
		targetTransformX = parseInt(nums[0]);
		targetTransformY = parseInt(nums[1]);
	}

	// get current window X Y
	var x1 = win.offsetLeft+targetTransformX;
	var x2 = x1+win.offsetWidth;
	var y1 = win.offsetTop+targetTransformY;
	var y2 = y1+win.offsetHeight;

	// get  items to (move tab)/(recreate window)
	var id_num = target.id.match("[0-9]+"); // get id to catch element from window
	var target_content_holder = win.querySelector("#content-holder"+id_num); // catch content
	var icon_block = win.querySelector("#icon-block"+id_num); // catch icon
	var icon_src = icon_block.querySelector("img").src; // get icon src

	if (x1, x2, y1, y2, x1 <= e.clientX && e.clientX <= x2 && y1 <= e.clientY && e.clientY <= y2) { // check if over current window
		var container = win.querySelector(".container");

		// get current window container coords
		var container_x1 = x1 + container.offsetLeft;
		var container_x2 = container_x1 + container.offsetWidth;
		var container_y1 = y1 + container.offsetTop;
		var container_y2 = container_y1 + container.offsetHeight;
		
		if (container_x1 <= e.clientX && e.clientX <= container_x2 && container_y1 <= e.clientY && e.clientY <= container_y2) { // if over container
			win.querySelector("#content-holder"+id_num).style.display = null; // make visible
		}
		
		// set transition and smooth return to topbar
		target.style.transition = "background-color 0.1s ease-in-out, transform 0.1s ease-in-out";
		target.style.transform = null;
	}
	else { // if out the current window
		// get highest window by z-index
		var highestWin = "";

		// check all windows
		document.querySelectorAll(".window").forEach(item => {
			if (win != item) {
				// get translate
				var targetTransformX = 0;
				var targetTransformY = 0;
				if (item.style.transform != '') {
				
					var nums = item.style.transform.split("translate3d")[1];
					nums = nums.slice(1, nums.length-1).split("px,");
					
					targetTransformX = parseInt(nums[0]);
					targetTransformY = parseInt(nums[1]);
				}

				// get coords (rewrite current window coords)
				x1 = item.offsetLeft+targetTransformX;
				x2 = x1+item.offsetWidth;
				y1 = item.offsetTop+targetTransformY;
				y2 = y1+item.offsetHeight;

				if (x1, x2, y1, y2, x1 <= e.clientX && e.clientX <= x2 && y1 <= e.clientY && e.clientY <= y2) { // if over a window
					if (highestWin == "") { 
						highestWin = item;
					}
					else {
						highestWin = (highestWin.style.zIndex > item.style.zIndex) && highestWin || item; // if bigger z-index then rewrite
					}
				}
			}
		});

		if (!highestWin) { // if default left (no window under cursor)

			// find icon match in appbar
			document.querySelectorAll(".img-container").forEach(item => {
				if (icon_src == item.querySelector("img").src) { // if matches
					// get selected underlines
					var underlines = item.querySelector(".underlines");

					// create new underline
					var underline = document.createElement("div");
					underline.classList.add("underline");
					underline.id = "underline"+win_num_g; // set new id

					// add minimalize function
					underline.addEventListener("click", e => {
						var win = document.querySelector("#window"+e.currentTarget.id.match("[0-9]+")[0]); // catch new window (with new id)
						if (win.style.display) {
							e.currentTarget.style.backgroundColor = "var(--light-bg-hl)";
							win.style.display = null;
						}
						else {
							e.currentTarget.style.backgroundColor = "var(--light-bg)";
							win.style.display = "none";
						}
					});

					underlines.appendChild(underline); // add underline 
				}
			});

			// recreate window
			var win = makeWindow(target_content_holder.firstChild || document.createElement("div"), icon_src, target.innerHTML);
			document.body.appendChild(win);
			win.style.top = window.innerHeight/2-win.offsetHeight/2+"px";
			win.style.left = window.innerWidth/2-win.offsetWidth/2+"px";

			// erase elements from the current window 
			target.parentElement.removeChild(target);
			icon_block.parentElement.removeChild(icon_block);
			target_content_holder.parentElement.removeChild(target_content_holder);
		}
		else { // if window under cursor

			// get selected window topbar
			var winPanel = highestWin.querySelector(".win-panel");
			
			// get topbar coords
			var panel_x1 = x1 + winPanel.offsetLeft;
			var panel_x2 = panel_x1 + winPanel.offsetWidth;
			var panel_y1 = y1 + winPanel.offsetTop;
			var panel_y2 = panel_y1 + winPanel.offsetHeight;
			
			// delete target's transform
			target.style.transform = null;

			// move tab to the new window
			highestWin.querySelector(".tab-holder").insertBefore(target, highestWin.querySelector(".tab-add"));

			// if already has drag function (was once moved)
			if (!target.hasDrag) {
				target.hasDrag = true;
				target.addEventListener("mousedown", e => {
					dragAdd(e, `#${target.id}`, `#${target.id}`, undefined, dropTransition, undefined, undefined, undefined, remakeWindow); // add this function to tab
				});
				window.addEventListener("mouseup", e => {leave(e, `#${target.id}`)}); // add global drop check for this tab
			}

			if (panel_x1 <= e.clientX && e.clientX <= panel_x2 && panel_y1 <= e.clientY && e.clientY <= panel_y2) { // if over panel
				target_content_holder.style.display = "none";
			}
			else { // else tile window
				target_content_holder.style.display = null;
			}

			// move container to the selected window
			highestWin.querySelector(".container").appendChild(target_content_holder);

			// hide icon block and move it to the selected window
			icon_block.style.display = "none";
			highestWin.insertBefore(icon_block, highestWin.querySelector(".wl"));
		
			// recreate min-width for selected window
			highestWin.style.minWidth = (highestWin.querySelector(".tab-holder").children.length-1)*150+280+"px";

			// place selected window over other windows
			highestWin.style.zIndex = z_index_g;
			z_index_g += 1;
		}

		// recreate min-width for current window if tab out
		win.style.minWidth = (win.querySelector(".tab-holder").children.length-1)*150+280+"px";
	}
}

// W I N D O W  C O N T R O L  F U N C  F O R  W I N D O W  S T A C K I N G

const insertCheck = (e, target, info) => {
	// default for window under cursor
	var highestWin = "";

	// get highest window under cursor
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

			// get coords
			var x1 = item.offsetLeft+targetTransformX;
			var x2 = x1+item.offsetWidth;
			var y1 = item.offsetTop+targetTransformY;
			var y2 = y1+item.offsetHeight;

			// check position
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

	// if a window under cursor
	if (highestWin != "") { 

		var targetTransformX = 0;
		var targetTransformY = 0;
		if (highestWin.style.transform != '') {
		
			var nums = highestWin.style.transform.split("translate3d")[1];
			nums = nums.slice(1, nums.length-1).split("px,");
			
			targetTransformX = parseInt(nums[0]);
			targetTransformY = parseInt(nums[1]);
		}

		// get coords again
		var x1 = highestWin.offsetLeft+targetTransformX;
		var x2 = x1+highestWin.offsetWidth;
		var y1 = highestWin.offsetTop+targetTransformY;
		var y2 = y1+highestWin.offsetHeight;

		// get highest window panel
		var winPanel = highestWin.querySelector(".win-panel");
		
		// get coords for panel
		var panel_x1 = x1 + winPanel.offsetLeft;
		var panel_x2 = panel_x1 + winPanel.offsetWidth;
		var panel_y1 = y1 + winPanel.offsetTop;
		var panel_y2 = panel_y1 + winPanel.offsetHeight;
		
		// get current window
		var win = document.querySelector(info.target);
		
		// move all tabs to new window
		win.querySelectorAll(".win-tab").forEach(item => {
			highestWin.querySelector(".tab-holder").insertBefore(item, highestWin.querySelector(".tab-add"));

			// if tab doesn't have a drag event
			if (!item.hasDrag) {
				item.hasDrag = true;
				item.addEventListener("mousedown", e => {
					dragAdd(e, `#${item.id}`, `#${item.id}`, undefined, dropTransition, undefined, undefined, undefined, remakeWindow);
				});
				window.addEventListener("mouseup", e => {leave(e, `#${item.id}`)});
			}

		});

		// move all content to new window
		win.querySelectorAll(".content-holder").forEach(item => {
			if (panel_x1 <= e.clientX && e.clientX <= panel_x2 && panel_y1 <= e.clientY && e.clientY <= panel_y2 || false) {
				item.style.display = "none";
			}
			highestWin.querySelector(".container").appendChild(item);
		});
		
		// move all icons to new window
		win.querySelectorAll(".icon-block").forEach(item => {
			item.style.display = "none";
			highestWin.insertBefore(item, highestWin.querySelector(".wl"));
		});
		
		// close current window
		closeWindow(e, win);

		// change minimal sizes
		highestWin.style.minWidth = (highestWin.querySelector(".tab-holder").children.length-1)*150+280+"px";

		// change z-index
		highestWin.style.zIndex = z_index_g;
		z_index_g += 1;
	}
}

// change z-index
const moveUp = (e, target, info) => {
	target.style.zIndex = z_index_g;
	z_index_g += 1;
}

// A P P  B A R

// disable transition on move start and set higher layer
const iconDropTransition = (e, target, info) => {
	target.style.transition = null;
	target.style.zIndex = 2;
}

// drag icon func
const moveIcon = (e, target, info) => {

	// get dock
	var dock = document.querySelector(".dock");

	// get app bar
	var icon_holder = document.querySelector(".app-bar");

	// flag for position before or after current icon 
	var insertAfter = false;

	// get all icons
	document.querySelectorAll(".img-container, .app-bar hr").forEach(item => {
		if (target != item) { // if not current icon

			// get positions
			var x1 = dock.offsetLeft + icon_holder.offsetLeft + item.offsetLeft;
			var x2 = x1 + item.offsetWidth;
			var y1 = dock.offsetTop + icon_holder.offsetTop + item.offsetTop;
			var y2 = y1 + item.offsetHeight;

			// check if over
			if (x1, x2, y1, y2, x1 <= e.clientX && e.clientX <= x2 && y1 <= e.clientY && e.clientY <= y2) {
				// check flag
				if (insertAfter) {
					item.parentElement.insertBefore(target, item.nextSibling);
				}
				else {
					item.parentElement.insertBefore(target, item);
				}

				// if moved
				target.style.transform = null;
				target.style.zIndex = null;
				return
			}
		}
		else { // toggle flag if current
			insertAfter = true;
		}
	});

	// set transition to move back
	target.style.transition = "transform 0.1s ease-in-out";
	target.style.transform = null;
	target.style.zIndex = null;
}

// W I N D O W  G E N E R A T O R

var win_num_g = 1; // global window id number 
const makeWindow = (content, icon_src, title, extraClass, x, y, makeClone) => {
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
	win.addEventListener("click", e => {moveUp(e, win, undefined)});

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

	content_holder.appendChild(makeClone && content.cloneNode(true) || content);
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

// A P P  B A R  F I L L E R

var apps_list; // global app list for window functions
const appBarGenerate = apps_list_l => { // local app list
	// get app bar
	var app_bar = document.querySelector(".app-bar");	

	// rewrite global app list
	apps_list = apps_list_l;

	var i = 0; // ids for icons and wrappers (required for drag function)
	apps_list_l.forEach(item => { // iterate list

		if (item.content == "hr") {
			app_bar.appendChild(document.createElement("hr"));
		}
		else {
			// create one item
			var img_container = document.createElement("div");
			img_container.classList.add("img-container");
			img_container.id = `img-container${i}`;
			
			// create icon wrap
			var img_wrap = document.createElement("div");
			img_wrap.classList.add("img-wrapper");
			img_wrap.addEventListener("click", e => { // add window creation
			
				// create new underline on click
				var underline = document.createElement("div");
				underline.classList.add("underline");
				underline.id = `underline${win_num_g}`;

				underline.addEventListener("click", e => { // add minimalize func
					var win = document.querySelector("#window"+e.currentTarget.id.match("[0-9]+")[0]);
					if (win.style.display) {
						e.currentTarget.style.backgroundColor = "var(--light-bg-hl)";
						win.style.display = null;
					}
					else {
						e.currentTarget.style.backgroundColor = "var(--light-bg)";
						win.style.display = "none";
					}
				});

				// add underline on create
				underlines.appendChild(underline);

				// create window
				var win = makeWindow(item.content, item.src, item.title, item.extraClass || [], undefined, undefined, true);
				document.body.appendChild(win);
				win.style.top = window.innerHeight/2-win.offsetHeight/2+"px";
				win.style.left = window.innerWidth/2-win.offsetWidth/2+"px";

			});
			
			// create icon
			var img = document.createElement("img");
			img.classList.add("noselect");
			img.src = item["src"];
			img.id = `app-icon${i}`;
			i+=1; // increment id
			img.addEventListener("mousedown", e => {dragAdd(e, `#${img.id}`, `#${img_container.id}`, undefined, iconDropTransition, undefined, undefined, undefined, moveIcon)});

			// create underlines container
			var underlines = document.createElement("div");
			underlines.classList.add("underlines");

			// add icon to wrap
			img_wrap.appendChild(img);

			// add all to the item
			img_container.appendChild(img_wrap);
			img_container.appendChild(underlines);

			// add drop event
			window.addEventListener("mouseup", e => {leave(e, `#${img_container.id}`)});

			// add icon and underlines section to bar
			app_bar.appendChild(img_container);
		}
	});

	var hider_holder = document.createElement("div");
	hider_holder.classList.add("hider-holder");

	var hider = document.createElement("img");
	hider.classList.add("noselect");
	hider.src = "src/images/demo/icons/Back.png";

	hider_holder.addEventListener("click", e => {
		var get_app = document.querySelector(".app-bar hr");
		var curr_icon = hider.src.split("/");
		curr_icon = curr_icon[curr_icon.length-1];
		if (curr_icon == "Back.png") {
			while (!get_app.nextSibling.classList.contains("hider-holder")) {
				get_app.nextSibling.style.display = "none";
				get_app = get_app.nextSibling;
			}
			hider.src = "src/images/demo/icons/Forward.png";
		}
		else {
			while (!get_app.nextSibling.classList.contains("hider-holder")) {
				get_app.nextSibling.style.display = null;
				get_app = get_app.nextSibling;
			}
			hider.src = "src/images/demo/icons/Back.png";
		}
	});

	hider_holder.appendChild(hider);
	app_bar.appendChild(hider_holder);
}

var scroll_list;
const scrollBarGenerate = scroll_list_l => {
	scroll_list = scroll_list_l;
	var scroll_bar = document.querySelector(".scroll-bar");
	scroll_bar.querySelectorAll(".scroll-item").forEach(item => {
		scroll_bar.removeChild(item);
	});
	var child = scroll_list_l.items[scroll_list_l.pos];
	child.classList.add("scroll-item");
	scroll_bar.appendChild(child);
	if (!scroll_bar.hasScroll) {
		scroll_bar.addEventListener("wheel", e => {
			if (e.deltaY > 0) {
				scroll_list.pos += parseInt((scroll_list.pos >= scroll_list.items.length-1) && "0" || "1");
			}
			else {
				scroll_list.pos -= parseInt((scroll_list.pos <= 0) && "0" || "1");
			}
			scrollBarGenerate(scroll_list);
		});
		scroll_bar.hasScroll = true;
	}
}

window.addEventListener("mousemove", drag); // add main drag check
document.querySelector("html").addEventListener("mouseleave", leaveAll); // add out of bounds check
