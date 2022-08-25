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

$(".slide3").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    autoplay:true,
    items:1,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
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
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
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

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}
window.addEventListener("scroll", reveal);

// var speed = 50;
// function incEltNbr(id) {
// elt = document.getElementById(id);
// endNbr = Number(document.getElementById(id).innerHTML);
// incNbrRec(0, endNbr, elt);
// }
// function incNbrRec(i, endNbr, elt) {
// if (i <= endNbr) {
//     elt.innerHTML = i;
//     setTimeout(function() {
//     incNbrRec(i + 1, endNbr, elt);
//     }, speed);
// }
// }

function visible(partial) {
  var $t = partial,
      $w = jQuery(window),
      viewTop = $w.scrollTop(),
      viewBottom = viewTop + $w.height(),
      _top = $t.offset().top,
      _bottom = _top + $t.height(),
      compareTop = partial === true ? _bottom : _top,
      compareBottom = partial === true ? _top : _bottom;

  return ((compareBottom <= viewBottom) && (compareTop >= viewTop) && $t.is(':visible'));

}







