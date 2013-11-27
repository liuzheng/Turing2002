function clearSearchInput() {
	var input = document.getElementById("site_search");
	
	input.onfocus = function() {
		if (this.value === "TYPE HERE") {
			this.value = "";
		}
	};
	
	input.onblur = function() {
		if (this.value === "") {
			this.value = "TYPE HERE";
		}
	};
}

if (window.addEventListener) {
	window.addEventListener("load", clearSearchInput, false);
} else if (window.attachEvent) {
	window.attachEvent("onload", clearSearchInput);
}