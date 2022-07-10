// needs cursor_js loaded

var dragList = [];

// mousedown event (control element)
const dragAdd = (e, target, fcurrentTarget, fTarget) => {
	console.log("here");
	dragList.push(target);
	var target = document.querySelector(target);
	target.style.zIndex = 1;

	if (fcurrentTarget != undefined) {
		fcurrentTarget(e.currentTarget);
	}

	if (fTarget != undefined) {
		fTarget(target);
	}
}

//mousemove event (window)
const drag = e => {
	dragList.forEach(item => {
		var target = document.querySelector(item);
		var targetX = realMouseX+window.scrollX-target.offsetLeft;
		var targetY = realMouseY+window.scrollY-target.offsetTop;
		var targetTransformX = 0;
		var targetTransformY = 0;
		if (target.style.transform != '') {
			var nums = target.style.transform.split("translate3d")[1];
			nums = nums.slice(1, nums.length-1).split("px, ");
			targetTransformX = parseInt(nums[0]);
			targetTransformY = parseInt(nums[1]);
		}
		var targetCursorX = targetX-targetTransformX;
		var targetCursorY = targetY-targetTransformY;
		
		target.style.transform = `translate3d(${targetX-targetCursorX+e.movementX}px, ${targetY-targetCursorY+e.movementY}px, 0)`;
	});
}

//mouseup event (control element) (also may be mouseout as main drop) 
const leave = (e, target, fcurrentTarget, fTarget) => { // event, move target, fuction for control, function for target
	for (var i = 0; i < dragList.length; i++) { 
    
        if ( dragList[i] == target) { 
    
            dragList.splice(i, 1); 
        }
    
    }

	var target = document.querySelector(target);
	target.style.zIndex = null;

	if (fcurrentTarget != undefined) {
		fcurrentTarget(e.currentTarget);
	}

	if (fTarget != undefined) {
		fTarget(target);
	}
}
