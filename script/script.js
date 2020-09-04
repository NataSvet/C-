let w;
function displayWindowSize() {
  w = document.documentElement.clientWidth;
  //h = $(window).outerHeight();
  adaptive(w);

  //one_pusk();
}
////////////////////////////
$(document).ready(function () {
  $(".slider-place").slick({
    arrows: false,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1000,
    infinite: true,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1227,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 830,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

$(document).ready(function () {
  $(".slider-travel").slick({
    arrows: true,
    dots: true,
    adaptiveHeight: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    infinite: true,
    responsive: [
      {
        breakpoint: 1227,
        settings: {},
      },
    ],
  });
});

$(document).ready(function () {
  $(".slider-tours").slick({
    arrows: false,
    dots: true,
    adaptiveHeight: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1000,
    infinite: true,
    responsive: [
      {
        breakpoint: 1900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1231,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

$(document).ready(function () {
  $(".discount__slider").slick({
    arrows: true,
    dots: false,
    adaptiveHeight: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    infinite: true,
    responsive: [
      {
        breakpoint: 1900,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1231,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

$(document).ready(function () {
  $(".slider-stock").slick({
    arrows: true,
    dots: false,
    adaptiveHeight: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    infinite: false,
  });
});
/////////
var tabcolumn = document.querySelectorAll(".search-tickets__bottom");
let tabbutton = document.querySelectorAll(".search-tickets__column");
console.log(tabbutton);
window.onload = function () {
  //tabbutton = document.querySelectorAll(".search-tickets__column");

  one_pusk();
  adaptive(w);
};
inactive(1);
function inactive(b) {
  for (var i = b; i < tabbutton.length; i++) {
    tabbutton[i].classList.remove("active");
    tabbutton[i].classList.add("inactive");
    tabcolumn[i].classList.remove("active");
    tabcolumn[i].classList.add("inactive");
  }
}
document.getElementById("button-search").onclick = function (event) {
  var target = event.target;
  for (var i = 0; i < tabbutton.length; i++) {
    if (target == tabbutton[i]) {
      activetab(i);
      console.log(tabbutton);
      break;
    }
  }
};
var activetab = function (activetab) {
  if (tabbutton[activetab].classList.contains("inactive")) {
    inactive(0);
    tabbutton[activetab].classList.add("active");
    tabbutton[activetab].classList.remove("inactive");
    tabcolumn[activetab].classList.add("active");
    tabcolumn[activetab].classList.remove("inactive");
  }
};
/////////////////////////////////////////////////////////////
var menu_burger = document.querySelector(".menu-burger");
var menu_header_list = document.querySelector(".menu-header__list");
var body = document.querySelector(".body");
menu_burger.addEventListener("click", function (evt) {
  menu_burger.classList.toggle("active");
  menu_header_list.classList.toggle("active");
  body.classList.toggle("lock");
});
//аналог на jquery
/* $(".menu-burger").click(function () {
  $(".menu-burger").toggleClass("active");
  $(".menu-header__list").toggleClass("active");
  $(".body").toggleClass("lock");
}); */

var adaptive = function (w) {
  var headerMenu = $(".header-top");
  var headerLogo = $(".header-bottom__logo");
  if (w < 767) {
    if (!headerLogo.hasClass("done")) {
      headerLogo.addClass("done").prependTo(headerMenu);
    }
  } else {
    if (headerLogo.hasClass("done")) {
      headerLogo.removeClass("done").prependTo($(".header-bottom"));
      console.log(headerLogo);
    }
  }
};

/* var adaptive = function (w) {
  var headerMenu = document.querySelector(".header-top");
  var headerLogo = document.querySelector(".header-bottom__logo");
  var header_bottom = document.querySelector(".header-bottom");
  var done = document.querySelector(".done");
  if (w < 767) {
    if (!headerLogo.contains(done)) {
      console.log(headerMenu);
      headerLogo.classList.add(done).appendChild(headerMenu);
    }
  } else {
    if (headerLogo.contains("done")) {
      headerLogo.contains("done").prepend(header_bottom);
    }
  }
}; */
window.addEventListener("resize", displayWindowSize);
displayWindowSize();
////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////
function ibg() {
  let ibg = document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector("img")) {
      ibg[i].style.backgroundImage =
        "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
    }
  }
}

ibg();
