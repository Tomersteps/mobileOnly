var isMobile = require('ismobilejs');
module.exports = function(screenId, phoneImageUrl, options) {
	options = options || {};
	if (isMobile.phone || window.location.hash === "#mobile") {
		return;
	}
	var screenElm = document.getElementById(screenId);
	if (!screenElm) {
		console.error("cannot find element with id", screenId)
		return false;
	}
	if (options.iframe) {

		screenElm.remove();
		screenElm = document.createElement('iframe');
		screenElm.src = window.location.href + "#mobile";
		screenElm.style.border = "none"
		document.body.appendChild(screenElm);
	}
	// iphone screen size is 320 × 568
	screenElm.style.setProperty("height", "568px")
	screenElm.style.setProperty("width", "320px")
	
	screenElm.style.marginTop = "112px";
	screenElm.style.marginLeft = "auto";
	screenElm.style.marginRight = "auto";
	screenElm.style.display = "block";

	document.body.style.backgroundPosition = "center top";
	document.body.style.backgroundRepeat = "no-repeat";
	document.body.style.backgroundSize = "496px 796px";
	document.body.style.backgroundImage = `url('${phoneImageUrl}')`;
	document.body.style.margin = 0;
}