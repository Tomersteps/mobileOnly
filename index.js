var isMobile = require('ismobilejs');
module.exports = function(screenId, phoneImageUrl, options) {
	options = options || {};
	if (isMobile.phone) {
		return true;
	}

	if (options.iframe && inIframe()) {
		return true;
	}
	var screenElm = document.getElementById(screenId);
	if (!screenElm && !options.iframe) {
		console.error("cannot find element with id", screenId)
		return false;
	}

	if (options.iframe) {
		var iframe = document.createElement('iframe');
		iframe.src = window.location.href;
		iframe.style.border = "none"
		Array.prototype.slice.call(document.body.children).forEach(function(child){
			if (child.tagName === "SCRIPT" || child.tagName === "IFRAME") {
				return;
			}
			console.log("remove", child);
			child.remove();
		});
		document.body.appendChild(iframe);
		screenElm = iframe;
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
	document.body.style.padding = 0;
	document.body.style.height = "796px";
}

function inIframe () {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}
