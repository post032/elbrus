(function() {
    "use strict";
    var toggles = document.querySelectorAll('.menu__open');
    var open = document.querySelector('#nav');
    for (var i = toggles.length - 1; i >= 0; i--) {
      var toggle = toggles[i];
      toggleHandler(toggle);
    };

    function toggleHandler(toggle) {
      toggle.addEventListener("click", function(e) {
        e.preventDefault();
        open.classList.toggle('menu__hide');
        (this.classList.contains("is-active") === true) ? this.classList.remove("is-active"): this.classList.add("is-active");
      });
    }
  })();

  $(document).ready(function(){
  $('.info__slider').slick({
    dots: true,
    infiniti: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 3000,
    asNavFor: '.info__navs'
  });
});

$('.info__navs').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.info__slider',
  dots: true,
  arrows: false,
  centerMode: true,
  focusOnSelect: true
});
$(".info__slider").on('afterChange', function(event, slick, currentSlide){
   $("#cp").text(currentSlide + 1);
});

// $(document).ready(function(){
// $('.about-us__slider').slick({
//   dots: true,
//   infiniti: true,
//   slidesToShow: 1,
//   slidesToScroll: 1,
// });
// });

$(".about-us__slider").on('afterChange', function(event, slick, currentSlide){
   $("#cn").text(currentSlide + 1);
});

$('.about-us__slider').slick({
  centerMode: true,
  dots: true,
  slidesToShow: 2,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        centerMode: false,
        slidesToShow: 1
      }
    }
  ]
});
