//-- B A C K G R O U N D  P A R A L L A X --//
/*
const parallax = e => { // parallax scroll event function
	var percent = 40; // background Y move rate (percent)

	document.querySelectorAll(".parallax").forEach(item => {
		item.style.backgroundPosition = `50% ${-220+(window.scrollY-item.offsetTop)/item.clientHeight*percent*(-1)}%`;
	});
}
*/
//- E N A B L E  P A R A L L A X -//
/*
window.addEventListener("scroll", parallax);
window.addEventListener("resize", parallax); 
*/
/*
    //-- B A C K G R O U N D  P A R A L L A X --//

    document.querySelector(".main").addEventListener("mousemove", e => {
        var wpers = 1; // width move persent 
        var hpers = 2; // height move persent
        var width = e.currentTarget.clientWidth; // page width
        var height = e.currentTarget.clientHeight; // page height
        var x = e.pageX; // cursor X
        var y = e.pageY; // cursor Y
        e.currentTarget.querySelector(".header-video").style.transform = `translate(${wpers*(x-width/2)/(width/2)}%, ${hpers*(y-height/2)/(height/2)}%)`;
    });
*/
/*
document.querySelector(".bg").addEventListener("mousemove", e => {
	var currentPosition = e.currentTarget.style.backgroundPosition.split(" ");
	for (var i in currentPosition) {currentPosition[i] = parseFloat(currentPosition[i]);}
	var anchor = [50, 0]; // x,y
	var percent = [5, 10]; // x,y
	var clientSize = [e.currentTarget.clientWidth, e.currentTarget.clientHeight];
	var cursorPosition = [e.pageX,e.pageY];

	// calculates next x,y
	var nextPosition = [];
	for (var i in currentPosition) {
		nextPosition.push(anchor[i]+(clientSize[i]/clientSize[1-i]*percent[i])*(cursorPosition[i]-clientSize[i]/2)/(clientSize[i]/2));
	}

	// calculates distance x,y
	var distance = [];
	var speed = []
	for (var i in currentPosition) {
		distance.push(nextPosition[i]-currentPosition[i]);
		if (Math.abs(nextPosition[i]) > Math.abs(currentPosition[i])) {
			speed.push(1-Math.abs(currentPosition[i])/Math.abs(nextPosition[i]));
		} 
		else {
			speed.push(1-Math.abs(nextPosition[i])/Math.abs(currentPosition[i]));
		}
	}

	e.currentTarget.style.backgroundPosition = `${currentPosition[0]+distance[0]*speed[0]}% ${currentPosition[1]+distance[1]*speed[1]}%`;
});
*/
