var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var closeIcon = document.querySelector(".icon_close");

menuIcon.onclick = function () {
	sidebar.classList.toggle("small-sidebar");
}

closeIcon.onclick = function () {
	sidebar.classList.onclick("close-sidebar")
}