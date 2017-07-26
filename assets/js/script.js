$(document).ready(function(){
	var pageTitle = {};
	pageTitle.index = 'y';
	pageTitle.portfolio = 'g';
	pageTitle.contact = 'b';
	//console.log(window.location);
	// [^/]+(?=/$|$)
	var lastPart = '';
	var lastSlash = window.location.href.lastIndexOf("/");
	var lastPeriod = '';
	//console.log(lastSlash);
	lastPart = window.location.href.substr(lastSlash + 1);
	//console.log(lastPart);
	lastPart = lastPart.substr(0, lastPart.lastIndexOf("."));
	//console.log(lastPart);

	console.log(pageTitle[lastPart]);

	var colorvar = pageTitle[lastPart];
	$(".title").addClass(colorvar);
});