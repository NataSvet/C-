window.onload = function () {
  const animItems = document.querySelectorAll("._anim-items");

  if (animItems.length > 0) {
    window.addEventListener("scroll", animOnScroll); //вызов функции при скроле
    function animOnScroll() {
      for (let index = 0; index < animItems.length; index++) {
        const animItem = animItems[index];
        const animItemHeight = animItem.offsetHeight; //получаем высоту элимента полную
        const animItemOffset = offset(animItem).top; //возвращает расстояние до верхнего родительского узла
        const animStart = 4; //коэфициент момента старта анимации

        let animItemPoint = window.innerHeight - animItemHeight / animStart; //высота окна браузера -высоту элемента деленное на коэф
        if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }

        if (
          pageYOffset > animItemOffset - animItemPoint &&
          pageYOffset < animItemOffset + animItemHeight
        ) {
          animItem.classList.add("_active");
        } else {
          if (!animItem.classList.contains("_anim-no-hide")) {
            animItem.classList.remove("_active");
          }
        }
      }
    }
    function offset(el) {
      const rect = el.getBoundingClientRect(), //возвращает размер элемента и его позицию относительно viewport
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft, //прокрутка по горизонтали или в лево
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }

    setTimeout(() => {
      animOnScroll();
    }, 300);
  }
};
