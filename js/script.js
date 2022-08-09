var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var closeIcon = document.querySelector(".icon_close");

menuIcon.onclick = function () {
<<<<<<< HEAD
  sidebar.classList.toggle("small-sidebar");
};

closeIcon.onclick = function () {
  sidebar.classList.onclick("close-sidebar");
};

function toggleItem(id1, id2, itemTitle, itemContent) {
  document.getElementById(id1).classList.toggle("none");
  document.getElementById(id2).classList.toggle("none");
  document.getElementById(itemTitle).classList.toggle("focus");
  document.getElementById(itemContent).classList.toggle("none");
}
=======
	sidebar.classList.toggle("small-sidebar");
}

closeIcon.onclick = function () {
	sidebar.classList.onclick("close-sidebar")
}
>>>>>>> home
