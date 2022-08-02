var menuIcon = document.querySelector(".elementor-icon");
var sidebar = document.querySelector(".sidebar");

menuIcon.onclick = function () {
	sidebar.classList.toggle("small-sidebar");
}