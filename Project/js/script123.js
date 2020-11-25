$(function () {
	$("#navbarToggle").blur(function (event) {
		var screenWidth = window.innerWidth;
		if (screenWidth < 768) {
			$("#collapsable-nav").collapse('hide');
		}
	});
});
(function (global) {
var dc = {};
var homeHtml = "snippets/home-snippet.html";

var insertHtml = function (selector, html) {
	var targetElem = document.querySelector(selector);
	targetElem.innerHtml = html;
};

var showLoading = function (selector) {
	var	html = "<div class='text-center'>";
	html += "<img src='image/ajax-loader.gif'></div>";
	insertHtml(selector, html);
};

document.addEventListener("DOMContentLoaded", function (event) {
	
	showLoading("#main-content");
	$ajaxUtils.sendGetRequest(
		homeHtml,
		function (responseText) {
		 	document.querySelector("#main-content")
		 	.innerHtml = responseText;
		 }, 
        false);
	console.log($ajaxUtils)
});

global.$dc = dc;

})(window);