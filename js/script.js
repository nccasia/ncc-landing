var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var closeIcon = document.querySelector(".icon_close");

console.log("abc");

menuIcon.onclick = function () {
  sidebar.classList.toggle("small-sidebar");
};

closeIcon.onclick = function () {
  sidebar.classList.onclick("close-sidebar");
};

function toggleItem(id1, id2, itemTitle, itemContent) {
  console.log("abc");
  document.getElementById(id1).classList.toggle("none");
  document.getElementById(id2).classList.toggle("none");
  document.getElementById(itemTitle).classList.toggle("focus");
  document.getElementById(itemContent).classList.toggle("none");
}
