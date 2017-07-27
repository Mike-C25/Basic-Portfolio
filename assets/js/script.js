function getDictionaryValueBasedOnUrl(dict){
	var lastPart = '';
	var lastSlash = window.location.href.lastIndexOf("/");
	var lastPeriod = '';
	//console.log(lastSlash);
	lastPart = window.location.href.substr(lastSlash + 1);
	//console.log(lastPart);
	lastPart = lastPart.substr(0, lastPart.lastIndexOf("."));
	return dict[lastPart];
}
function doStuff(c){
	$("#about").addClass(c[0], 
	$("#connect").addClass(c[1]));

	$("#portfolio").addClass(c[0], 
	$("#connect").addClass(c[1]));

	$("#form").addClass(c[0], 
	$("#connect").addClass(c[1]));
}

$(document).ready(function(){ 
	var pageTitle = {};
	pageTitle.index = 'y';
	pageTitle.portfolio = 'g';
	pageTitle.contact = 'b';
	var pageDict = {};
	pageDict.index = function(){
		doStuff(['animated fadeInUp', 'animated fadeInRight'])
	};
	pageDict.portfolio = function(){
		doStuff(['animated fadeInUp', 'animated fadeInRight'])
	};
	pageDict.contact = function(){
		doStuff(['animated fadeInUp', 'animated fadeInRight'])
	};

	// //console.log(window.location);
	// // [^/]+(?=/$|$)
	// var lastPart = '';
	// var lastSlash = window.location.href.lastIndexOf("/");
	// var lastPeriod = '';
	// //console.log(lastSlash);
	// lastPart = window.location.href.substr(lastSlash + 1);
	// //console.log(lastPart);
	// lastPart = lastPart.substr(0, lastPart.lastIndexOf("."));
	// //console.log(lastPart);

	// // console.log(pageTitle[lastPart]);

	// var colorvar = pageTitle[lastPart];
	var colorvar = getDictionaryValueBasedOnUrl(pageTitle);
	var stuff = getDictionaryValueBasedOnUrl(pageDict);
	

	$(".title").addClass(colorvar);
	$(".content-contain h3").addClass(colorvar);
	$(".footer").addClass(colorvar);

	stuff();
	






});