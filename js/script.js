$(document).ready(function(){
    $('.slider').slick({
       arrows: true,

        adaptiveHeight: true,
        slidesToShow:4,
        slidesToScroll:1,
        speed: 1000,
        easing: 'ease',
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 1500,
        pauseOnHover: true,

    responsive: [

  {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
    speed: 1000,
        easing: 'ease',
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 1500,
        pauseOnHover: true
      }
    },


  {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
    speed: 1000,
        easing: 'ease',
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 1500,
        pauseOnHover: true
      }
    },
    {
      breakpoint: 640,
      settings: {
    slidesToShow: 1,
        slidesToScroll: 1,
    arrows: true,
    dots: false,
    speed: 1000,
        easing: 'ease',
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 1500,
        pauseOnHover: true
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

    });

    var btn = $('#button');

    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
    });

    $("#menu").on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    //забираем идентификатор бока с атрибута href
    var id = $(this).attr('href'),
    //узнаем высоту от начала страницы до блока на который ссылается якорь
    top = $(id).offset().top;
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 2000);
    });

});
