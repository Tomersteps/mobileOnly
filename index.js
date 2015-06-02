var isMobile = require('ismobilejs');
module.exports = function(screenId, phoneImageUrl) {
	if (isMobile.phone) {
		return;
	}
	var screenElm = document.getElementById(screenId);
	if (!screenElm) {
		console.error("cannot find element with id", screenId)
		return false;
	}

	// iphone screen size is 320 × 568, upper left point - 74X235
	screenElm.style.setProperty("height", "568px")
	screenElm.style.setProperty("width", "320px")
	screenElm.style.setProperty("left", "-50%")
	screenElm.style.setProperty("position", "relative")

	var container = document.createElement("div");
	container.style.setProperty("position", "absolute");
	container.style.setProperty("left", "50%");
	container.style.setProperty("top", "112px");
	screenElm.remove();
	container.appendChild(screenElm);
	document.body.appendChild(container);

	document.body.style.backgroundPosition = "center top";
	document.body.style.backgroundRepeat = "no-repeat";
	document.body.style.backgroundSize = "496px 796px";
	document.body.style.backgroundImage = `url('${phoneImageUrl}')`
}