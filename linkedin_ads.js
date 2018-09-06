// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @require      http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include      https://www.linkedin.com/*
// @grant        window.focus
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';
    $(window).ready(function () {
        console.log("first");
    });
})();

setTimeout(function(){
    console.log("Linkedin Ad");
    var spans = document.getElementsByTagName("span");
    var a = document.getElementsByTagName("a");
	for(i=0;i<spans.length;i++)
	{
	  if(spans[i].innerText == 'Promoted'){
		console.log("promoted removal");
		spans[i].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove()
	}
	};
    for(i=0;i<a.length;i++)
{
  if(a[i].innerText == "See more courses"){
    console.log("course removal");
	a[i].parentElement.parentElement.remove();
	}
}
}, 3000);