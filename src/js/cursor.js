//-- S M A L L  D O C --//

// moveCursor (e)							- window event, that set custom cursor under the real 
//
// moveCursorScroll (e)						- window event to refrash cursor position on scroll
//
// setCursor (e,							- target event to get target's position, size and toggle cursor's class
//			 sizeRate,						- cursor size (1 - element size (100%), undefined - no change (just draging effect), less or more than 1 - smaller or bigger than target)
//			 additionalTargetClasses)				- toggle additional target's classes on wrap
//			 addScrollOffset,				- add scroll position to cursor position (only if target has position:fixed)
//			 f)								- custom function to interact with target and it's content
//
// coordinateCursor (e,						- target event to modify target/cursor while wrapping target
//
//					coordinationPercent,	- cursor shake ratio while wrapping target (undefined - no movement)
//					targetMovementRate,		- target float ratio (1 - follow cursor) 
//					sizeRate,				- cursor size (1 - element size (100%), undefined - no change (just draging effect), less or more than 1 - smaller or bigger than target)
//					centrify,				- (use only if target has transform:translate(-50%, -50%)) 
//					additionalEffects,		- additional transform effects
//					addScrollOffset,		- add scroll position to cursor position (only if target has position:fixed)
//					f)						- custom function to interact with target and it's content
//					
// unsetCursor (e,							- target event on cursor out
//				additionalTargetClasses,			- toggle target classes
//				f)							- custom function to interact with target and it's content


//-- C U R S O R  F U N C T I O N S --//

var mouseX; // global X cursor position
var mouseY; // global Y cursor position

var realMouseX;
var realMouseY;

const moveCursor = e => { // follow real cursor
	showCursor(); // show custom cursor

	realMouseX = e.clientX; 
	realMouseY = e.clientY;

	if(!cursorIcon.classList.contains('dragged')) {
		mouseX = e.clientX; // refresh global cursor X
		mouseY = e.clientY; // refresh global cursor Y
   
		cursor.style.transform = `translate3d(${window.scrollX+mouseX}px, ${window.scrollY+mouseY}px, 0)`; // set new position
	}
}

const moveCursorScroll = e => { // scroll sync
	showCursor(); // show custom cursor
	
	cursor.classList.forEach(item => {
		if (item != "cursor" && item != "cursor-visible") {
			cursor.classList.remove(item);
		}
	});
	
	cursorIcon.classList.forEach(item => {
		if (item != "cursor-icon") {
			cursorIcon.classList.remove(item);
		}
		cursorIcon.style.width = null;
		cursorIcon.style.height = null;
	});

	mouseX = window.scrollX+realMouseX;
	mouseY = window.scrollY+realMouseY;

	cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`; // set position (px)
}

const setCursor = (e, sizeRate, additionalCursorClasses, additionalTargetClasses, addScrollOffset, f) => { // get target position
	if(!cursorIcon.classList.contains('cursor-focus')) {
		if (addScrollOffset == undefined) {
			var addScrollOffset = false;
		}

		mouseX = e.currentTarget.offsetLeft+e.currentTarget.offsetWidth/2; // may be commented to optimize
		mouseY = e.currentTarget.offsetTop+e.currentTarget.offsetHeight/2; // may be commented to optimize

		cursorIcon.classList.add("dragged"); // disables cursor following
		if (addScrollOffset) { 
			cursor.style.transform = `translate3d(${window.scrollX+mouseX}px, ${window.scrollY+mouseY}px, 0)`; // set target position (px)
		} 
		else {
			cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`; // set target position (px)
		}
		
		if (sizeRate != undefined) {
			cursorIcon.style.width = `${e.currentTarget.offsetWidth*sizeRate}px`; // set new width
			cursorIcon.style.height = `${e.currentTarget.offsetHeight*sizeRate}px`; // set new height
		}

		if (additionalTargetClasses != undefined) {
			additionalTargetClasses.forEach(item => {e.currentTarget.classList.add(item)});
		}

		if (additionalCursorClasses != undefined) {
			additionalCursorClasses.forEach(item => {cursorIcon.classList.add(item)});
		}

		if (f != undefined) {
			f(e.currentTarget);
		}
	}
}

const coordinateCursor = (e, coordinationPercent, targetMovementRate, centrify, sizeRate, additionalEffects, addScrollOffset, f) => { // smooth moving targeted cursor (Rate => -1+, Percent -100+)
	if(!cursorIcon.classList.contains('cursor-focus')) {
		if (addScrollOffset == undefined) {
			var addScrollOffset = false;
		}

		mouseX = e.currentTarget.offsetLeft+e.currentTarget.offsetWidth/2; // may be commented to optimize
		mouseY = e.currentTarget.offsetTop+e.currentTarget.offsetHeight/2; // may be commented to optimize

		var coordinateX = 0;
		var coordinateY = 0;
		if (coordinationPercent != undefined) {
			var coordinateX = parseInt(((e.clientX-e.currentTarget.offsetLeft)/e.currentTarget.offsetWidth-0.5)*coordinationPercent);
			var coordinateY = parseInt(((e.clientY-e.currentTarget.offsetTop)/e.currentTarget.offsetHeight-0.5)*coordinationPercent);
		}

		if (addScrollOffset) { 
			cursor.style.transform = `translate(${coordinateX}%, ${coordinateY}%) translate3d(${window.scrollX+mouseX}px, ${window.scrollY+mouseY}px, 0)`; // set target position (px)
		} 
		else {
			cursor.style.transform = `translate(${coordinateX}%, ${coordinateY}%) translate3d(${mouseX}px, ${mouseY}px, 0)`; // set target position (px)
		}
		
		if (sizeRate != undefined) {
			cursorIcon.style.width = `${e.currentTarget.offsetWidth*sizeRate}px`; // set new width
			cursorIcon.style.height = `${e.currentTarget.offsetHeight*sizeRate}px`; // set new height
		}

		if (targetMovementRate != undefined || additionalEffects != undefined) {
			var transform = "";

			if (additionalEffects != undefined) {
				transform = additionalEffects.join(" ");
			}

			if (targetMovementRate != undefined) {
				if (coordinationPercent == undefined) {
					var defaultCoordination = 20;
					var coordinateX = parseInt(((e.clientX-e.currentTarget.offsetLeft)/e.currentTarget.clientWidth-0.5)*defaultCoordination);
					var coordinateY = parseInt(((e.clientY-e.currentTarget.offsetTop)/e.currentTarget.clientHeight-0.5)*defaultCoordination);
				}
				
				if (centrify) {
					transform += ` translate(${-50+coordinateX*targetMovementRate}%, ${-50+coordinateY*targetMovementRate}%)`;
				}
				else {
					transform += ` translate(${coordinateX*targetMovementRate}%, ${coordinateY*targetMovementRate}%)`;
				}
			}

			e.currentTarget.style.transform = transform;
		}

		if (f != undefined) {
			f(e.currentTarget);
		}
	}
}

const unsetCursor = (e, additionalCursorClasses, additionalTargetClasses, f) => {
	cursorIcon.classList.remove("dragged"); // enable following

	if(!cursorIcon.classList.contains('cursor-focus')) {
		cursorIcon.style.width = null; // erase width
		cursorIcon.style.height = null; // erase height

		e.currentTarget.style.transform = null;

		if (additionalTargetClasses != undefined) {
			additionalTargetClasses.forEach(item => {e.currentTarget.classList.remove(item)});
		}

		if (additionalCursorClasses != undefined) {
			additionalCursorClasses.forEach(item => {cursorIcon.classList.remove(item)});
		}

		if (f != undefined) {
			f(e.currentTarget);
		}
	}
}

const showCursor = e => { // show custom cursor
 
    if(cursor.classList.contains('cursor-hidden')) {
        cursor.classList.remove('cursor-hidden');
    }
 
    cursor.classList.add('cursor-visible');
 
}

const hideCursor = e => { // hide custom cursor
	
	if(cursor.classList.contains('cursor-visible')) {
		cursor.classList.remove('cursor-visible');
    
	}
	cursor.classList.add('cursor-hidden');
}

const cursorFocus = (e) => {
	cursorIcon.classList.add('cursor-focus');
}


const cursorUnfocus = (e) => {
	cursorIcon.classList.remove('cursor-focus');
	
	cursor.classList.forEach(item => {
		if (item != "cursor" && item != "cursor-visible") {
			cursor.classList.remove(item);
		}
	});
	
	cursorIcon.classList.forEach(item => {
		if (item != "cursor-icon") {
			cursorIcon.classList.remove(item);
		}
		cursorIcon.style.width = null;
		cursorIcon.style.height = null;
	});
}

//- E N A B L E  C U R S O R -//

var cursor = document.querySelector(".cursor");
var cursorIcon = document.querySelector(".cursor-icon");
