item.addEventListener("mouseleave", e => {
	e.target.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
});

item.addEventListener("mousemove", e => {
	e.target.style.transform = "perspective(1000px) rotateX("+((e.offsetY-e.currentTarget.offsetHeight/2)/e.currentTarget.offsetHeight*10)+"deg) rotateY("+((e.offsetX-e.currentTarget.offsetWidth/2)/e.currentTarget.offsetWidth*10)+"deg) scale3d(1.05, 1.05, 1.05)";
});
