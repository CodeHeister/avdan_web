var dragList = [];

// mousedown event (control element)
const dragAdd = (e, currentTarget, target, currentTarget_in_f, target_in_f, currentTarget_f, target_f, currentTarget_out_f, target_out_f, drop_f, modify_X, modify_Y) => {

	if (modify_X == undefined) {
		var modify_X = true;
	}

	if (modify_Y == undefined) {
		var modify_Y = true;
	}

	dragList.push({
		"currentTarget" : currentTarget,
		"target" : target,
		"currentTarget_in_f" : currentTarget_in_f,
		"target_in_f" : target_in_f,
		"currentTarget_f" : currentTarget_f,
		"target_f" : target_f,
		"currentTarget_out_f" : currentTarget_out_f,
		"target_out_f" : target_out_f,
		"drop_f" : drop_f,
		"modify_X" : modify_X,
		"modify_Y" : modify_Y
	});

	var target = document.querySelector(target);

	if (currentTarget_in_f != undefined) {
		currentTarget_in_f(e, e.currentTarget);
	}

	if (target_in_f != undefined) {
		target_in_f(e, target);
	}
}

const click = (e, target, currentTarget_f, target_f) => {
	
	var target = document.querySelector(target);

	if (currentTarget_f != undefined) {
		currentTarget_f(e, e.currentTarget);
	}

	if (target_f != undefined) {
		target_f(e, target);
	}
}

//mousemove event (window)
const drag = e => {
	dragList.forEach(item => {
		var target = document.querySelector(item.target);
		
		var targetX = e.clientX+window.scrollX-target.offsetLeft;
		var targetY = e.clientY+window.scrollY-target.offsetTop;

		var targetTransformX = 0;
		var targetTransformY = 0;
		
		if (target.style.transform != '') {
		
			var nums = target.style.transform.split("translate3d")[1];
			nums = nums.slice(1, nums.length-1).split("px,");
			
			targetTransformX = parseInt(nums[0]);
			targetTransformY = parseInt(nums[1]);
		}
		
		var targetCursorX = targetX-targetTransformX;
		var targetCursorY = targetY-targetTransformY;

		if (item.currentTarget_f != undefined) {
			item.currentTarget_f(e, document.querySelector(item.currentTarget));
		}

		if (item.target_f != undefined) {
			item.target_f(e, target);
		}
		
		if (item.modify_X && item.modify_Y) {
			target.style.transform = `translate3d(${targetX-targetCursorX+e.movementX}px,${targetY-targetCursorY+e.movementY}px,0)`;
		}
		else if (item.modify_X && !item.modify_Y) {
			target.style.transform = `translate3d(${targetX-targetCursorX+e.movementX}px,${targetY-targetCursorY}px,0)`;
		}
		else if (!item.modify_X && item.modify_Y) {
			target.style.transform = `translate3d(${targetX-targetCursorX}px,${targetY-targetCursorY+e.movementY}px,0)`;
		}
		else {
			target.style.transform = `translate3d(${targetX-targetCursorX}px,${targetY-targetCursorY}px,0)`;
		}

	});
}

//mouseup event (control element) (also may be mouseout as main drop) 
const leave = (e, target) => { // event, move target, fuction for control, function for target
	
	var info = '';

	for (var i = 0; i < dragList.length; i++) { 
    
        if ( dragList[i].target == target) { 
    
            info = dragList.splice(i, 1)[0]; 
        }
    
    }
	
	if (info != '') {
		var target = document.querySelector(target);
		var currentTarget = document.querySelector(info.currentTarget);

		if (info.currentTarget_out_f != undefined) {
			info.currentTarget_out_f(e, currentTarget);
		}

		if (info.target_out_f != undefined) {
			info.target_out_f(e, target);
		}
	}
}


const leaveAll = e => {
	dragList.forEach(info => {
		
		var target = document.querySelector(info.target);
		var currentTarget = document.querySelector(info.currentTarget);

		if (info.currentTarget_out_f != undefined) {
			info.currentTarget_out_f(e, e.currentTarget);
		}

		if (info.drop_f != undefined) {
			info.drop_f(e, target);
		}
		else {
			if (info.target_out_f != undefined) {
				info.target_out_f(e, target);
			}
		}
	});


	dragList = [];
}
