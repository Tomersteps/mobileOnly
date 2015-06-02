var isMobile = require('ismobilejs');
module.exports = function(screenId, phoneImageUrl, iframe) {
	if (isMobile.phone || window.location.hash === "#mobile") {
		return;
	}
	var screenElm = document.getElementById(screenId);
	if (!screenElm) {
		console.error("cannot find element with id", screenId)
		return false;
	}
	screenElm.remove();

	if (iframe === "iframe") {
		screenElm = document.createElement('iframe');
		screenElm.src = window.location.href + "#mobile";
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
	container.appendChild(screenElm);
	document.body.appendChild(container);

	document.body.style.backgroundPosition = "center top";
	document.body.style.backgroundRepeat = "no-repeat";
	document.body.style.backgroundSize = "496px 796px";
	document.body.style.backgroundImage = `url('${phoneImageUrl}')`
}