$('.slick-codepen').slick({
  draggable: false,

  slidesToShow: 3,
  speed: 800,
  arrows: true,
  dots: true,

  autoplay: true,
  autoplaySpeed: 3200,
  
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});





var prevSlideInterval = null,
    nextSlideInterval = null;

function prevSlideAnimation() { $('.slick-codepen').slickPrev(); };
function nextSlideAnimation() { $('.slick-codepen').slickNext(); };




$('.slick-prev').on('mouseenter', function() {
  prevSlideInterval = window.setInterval(function(){ prevSlideAnimation() }, 600);
});

$('.slick-prev').on('mouseleave', function() {
  window.clearInterval(prevSlideInterval);
});

$('.slick-next').on('mouseenter', function(){
  nextSlideInterval = window.setInterval(function(){ nextSlideAnimation() }, 600);
});

$('.slick-next').on('mouseleave', function() {
  window.clearInterval(nextSlideInterval);
});




$('.slick-slide22').slick({
  draggable: false,

  slidesToShow: 1,
  speed: 800,
  arrows: true,
  dots: true,

  autoplay: true,
  autoplaySpeed: 3200,
  
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});





var prevSlideInterval = null,
    nextSlideInterval = null;

function prevSlideAnimation() { $('.slick-slide22').slickPrev(); };
function nextSlideAnimation() { $('.slick-slide22').slickNext(); };



$('.slick-slide2233').slick({
  draggable: false,

  slidesToShow: 4,
  speed: 800,
  arrows: true,
  dots: true,

  autoplay: true,
  autoplaySpeed: 3200,
  
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});





var prevSlideInterval = null,
    nextSlideInterval = null;

function prevSlideAnimation() { $('.slick-slide2233').slickPrev(); };
function nextSlideAnimation() { $('.slick-slide2233').slickNext(); };






$('.slick-slideanhnho').slick({
  draggable: false,

  slidesToShow: 3,
  speed: 300,
  arrows: true,
  dots: true,

  autoplay: true,
  autoplaySpeed: 3200,
  
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});





var prevSlideInterval = null,
    nextSlideInterval = null;

function prevSlideAnimation() { $('.slick-slideanhnho').slickPrev(); };
function nextSlideAnimation() { $('.slick-slideanhnho').slickNext(); };