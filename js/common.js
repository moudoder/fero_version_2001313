$(document).ready(function () {
  

  if ($(window).width() > 767) {
      $('.advantages-slider').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.advantages-prev'),
        nextArrow: $('.advantages-next')
      });
  }

  $(".phone").mask("+7 (999) 999-9999");

  $(".scroll-to").on("click", function (event) {
    event.preventDefault();
    let id  = $(this).attr('href'),
    top = $(id).offset().top;
    let html_zoom = $('html').css('zoom');
    top = top * html_zoom;
    $('.modal-menu').removeClass('active');
    $('body,html').animate({scrollTop: top}, 1500);
  });

  $('.look-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('.look-prev'),
    nextArrow: $('.look-next'),
    dots: true,
    asNavFor: '.look-navslider',
    focusOnSelect: true
  });

  $('.look-navslider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    centerMode: true,
    variableWidth: true,
    asNavFor: '.look-slider',
    focusOnSelect: true
  });

  $('.modal-window').css("display", "flex");
  $('.modal-window').hide();

  $(document).mouseup( function(e){ // событие клика по веб-документу
      var div = $( ".modal-window .first-screen-form" ); // тут указываем ID элемента
      if ( !div.is(e.target) // если клик был не по нашему блоку
          && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
        $('.modal-form').fadeOut();
      }
    });

  $('.advantages-slide__btn').on('click', function() {
    $('.modal-form').fadeIn()
    return false;
  })

  $('.modal-window__close').on('click', function() {
    $('.modal-form').fadeOut()
    return false;
  })

  $('.header-burger').on('click', function() {
    $('.modal-menu').addClass('active')
    return false;
  })
  $('.modal-menu__close').on('click', function() {
    $('.modal-menu').removeClass('active')
    return false;
  })

  $('.questions-item').on('click', function() {
    $(this).toggleClass('visible');
    return false;
  })

  AOS.init();
})