document.getElementById("show-more").addEventListener("click", expandMore);

function expandMore(){
	"use strict";
	document.getElementById("show-more").style.display = "none";
	document.getElementById("expanded").style.display = "block";
}