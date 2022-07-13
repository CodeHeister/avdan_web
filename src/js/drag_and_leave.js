var dragList = [];

// mousedown event (control element)
const dragAdd = (e, currentTarget, target, currentTarget_in_f, target_in_f, currentTarget_f, target_f, currentTarget_out_f, target_out_f, drop_f, modify_X, modify_Y, extraX, extraY) => {
	if (e.target == e.currentTarget) {

		if (modify_X == undefined) modify_X = true
		if (modify_Y == undefined) modify_Y = true
		var info = {
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
			"modify_Y" : modify_Y,
			"extraX" : extraX || 0,
			"extraY" : extraY || 0
		};
		dragList.push(info);

		var target = document.querySelector(target);

		if (typeof currentTarget_in_f == "function") {
			currentTarget_in_f(e, e.currentTarget, info);
		}

		if (typeof target_in_f == "function") {
			target_in_f(e, target, info);
		}

		var targetTransformX = 0;
		var targetTransformY = 0;

		if (target.style.transform != '') {
		
			var nums = target.style.transform.split("translate3d")[1];
			nums = nums.slice(1, nums.length-1).split("px,");
			
			targetTransformX = parseInt(nums[0]);
			targetTransformY = parseInt(nums[1]);
		}

		target.style.transform = `translate3d(${targetTransformX+(extraX || 0)}px,${targetTransformY+(extraY || 0)}px,0)`;
	}
}

const click = (e, target, currentTarget_f, target_f) => {
	
	var target = document.querySelector(target);

	if (typeof currentTarget_f == "function") {
		currentTarget_f(e, e.currentTarget);
	}

	if (typeof target_f == "function") {
		target_f(e, target);
	}
}

//mousemove event (window)
const drag = e => {
	dragList.forEach(item => {
		var target = document.querySelector(item.target);
		var targetTransformX = 0;
		var targetTransformY = 0;
		if (target.style.transform != '') {
		
			var nums = target.style.transform.split("translate3d")[1];
			nums = nums.slice(1, nums.length-1).split("px,");
			
			targetTransformX = parseInt(nums[0]);
			targetTransformY = parseInt(nums[1]);
		}

		if (typeof item.currentTarget_f == "function") {
			item.currentTarget_f(e, document.querySelector(item.currentTarget), item);
		}

		if (typeof item.target_f == "function") {
			item.target_f(e, target, item);
		}

		var movementX = item.modify_X && e.movementX || 0;
		var movementY = item.modify_Y && e.movementY || 0;
		target.style.transform = `translate3d(${targetTransformX+movementX}px,${targetTransformY+movementY}px,0)`;
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

		if (typeof info.currentTarget_out_f == "function") {
			info.currentTarget_out_f(e, currentTarget, info);
		}

		if (typeof info.target_out_f == "function") {
			info.target_out_f(e, target, info);
		}

		if (target.style.transform != '') {
		
			var nums = target.style.transform.split("translate3d")[1];
			nums = nums.slice(1, nums.length-1).split("px,");
			
			var targetTransformX = parseInt(nums[0]);
			var targetTransformY = parseInt(nums[1]);
		}

		target.style.transform = `translate3d(${targetTransformX-info.extraX}px,${targetTransformY-info.extraY}px,0)`;
	}
}


const leaveAll = e => {
	dragList.forEach(info => {
		
		var target = document.querySelector(info.target);
		var currentTarget = document.querySelector(info.currentTarget);

		if (info.currentTarget_out_f != undefined) {
			info.currentTarget_out_f(e, e.currentTarget, info);
		}

		if (info.target_out_f != undefined) {
				info.target_out_f(e, target, info);
		}

		if (info.drop_f != undefined) {
			info.drop_f(e, target, info);
		}
		

		if (target.style.transform != '') {
		
			var nums = target.style.transform.split("translate3d")[1];
			nums = nums.slice(1, nums.length-1).split("px,");
			
			var targetTransformX = parseInt(nums[0]);
			var targetTransformY = parseInt(nums[1]);
		}

		target.style.transform = `translate3d(${targetTransformX-info.extraX}px,${targetTransformY-info.extraY}px,0)`;
	});


	dragList = [];
}
