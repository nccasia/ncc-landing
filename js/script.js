var menuIcon = document.querySelector(".navbar_menu");
var smallMenu = document.querySelector(".small_menu");

menuIcon.onclick = function () {
  smallMenu.classList.toggle("menu2");
};

function openSidebar() {
  document.getElementById("sidebar").style.display = "block";
}

function closeSidebar() {
  document.getElementById("sidebar").style.display = "none";
}

function toggleItem(id1, id2, itemTitle, itemContent) {
  document.getElementById(id1).classList.toggle("none");
  document.getElementById(id2).classList.toggle("none");
  document.getElementById(itemTitle).classList.toggle("focus");
  document.getElementById(itemContent).classList.toggle("none");
}

function openPopup(id) {
  var popup = document.getElementById(id);
  popup.classList.add("show");
}

function closePopup(id) {
  var popup = document.getElementById(id);
  popup.classList.remove("show");
}

window.addEventListener("click", ({ target }) => {
  const popup = [...document.getElementsByClassName("popuptext")];
  const popups = [...document.getElementsByClassName("content-popup")];
  const popupContain = target.closest(".content-popup");

  const clickedOnClosedPopup =
    popupContain && !popupContain.classList.contains("show");

  popups.forEach((p) =>
    popup.forEach((element) => {
      element.classList.remove("show");
      p.classList.remove("show");
    })
  );

  if (clickedOnClosedPopup) {
    popupContain.classList.add("show");
  }
});

$(".slide2").owlCarousel({
  loop: true,
  margin: 10,
  items: 1,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
  },
});

$(".slide1").owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 3,
      nav: false,
    },
  },
});
