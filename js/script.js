var menuIcon = document.querySelector(".navbar_menu");
var smallMenu = document.querySelector(".small_menu");

menuIcon.onclick = function () {
  smallMenu.classList.toggle("menu2");
};

function openSidebar() {
  document.getElementById("sidebar").style.display = "block";
}

function toggleItem(id1, id2, itemTitle, itemContent) {
  document.getElementById(id1).classList.toggle("none");
  document.getElementById(id2).classList.toggle("none");
  document.getElementById(itemTitle).classList.toggle("focus");
  document.getElementById(itemContent).classList.toggle("none");
}
