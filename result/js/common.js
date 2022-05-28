jQuery(document).ready(function( $ ) {

  $(".toggle-mnu").click(function() {
    $(this).toggleClass("on");
    $(".top-mnu").slideToggle();
    return false;
  });

  $('body').click(function () {
    if( $(".toggle-mnu").hasClass("on") ){
      $(".toggle-mnu").removeClass("on");
      $(".top-mnu").fadeOut();
    }
  });


  $(".top-mnu").click(function (e) {
    e.stopPropagation();
  });




//levels menu
let isMobile={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return(isMobile.Android()||isMobile.BlackBerry()||isMobile.iOS()||isMobile.Opera()||isMobile.Windows())}}

let body = document.querySelector('body');


if ( isMobile.any() ) {
  body.classList.add('touch');
  let arrow = document.querySelectorAll('.menu-arrow');
  arrow.forEach(function (item) {
    let thisLink = item.previousElementSibling;
    let subMenu = item.nextElementSibling;
    let thisArrow = item;

    thisLink.classList.add('parent');
    item.addEventListener('click', function () {      
      subMenu.classList.toggle('open');
      thisArrow.classList.toggle('active');
    });
  });
}
else {
  body.classList.add('mouse')
}

function scrollBarTeam(elem) {
  $(elem).mCustomScrollbar({
    axis: "x",
    theme: "dark-3",
    mouseWheel: 0,
    scrollInertia: '230'
  });    
}


if( $(window).width() < 800 ) {
  scrollBarTeam(".team__row-w")
}


$(window).resize(function() {
  if( $(window).width() < 800 ) {
    scrollBarTeam(".team__row-w")
  }
});



if( $(window).width() < 1101 ) {
  scrollBarTeam(".similar__row-w")
}


$(window).resize(function() {
  if( $(window).width() < 1101 ) {
    scrollBarTeam(".similar__row-w")
  }
});




$('.reviews__slider').slick({
  infinite: true,    
  speed: 600,
  slidesToScroll: 1,
  autoplay: false,    
  slidesToShow: 1,  
  autoplaySpeed: 0,  
  arrows: true,
  pauseOnHover: true,  
});


$('.search-objects__slider').slick({
  infinite: true,    
  speed: 600,
  slidesToScroll: 1,
  autoplay: false,    
  slidesToShow: 1,  
  autoplaySpeed: 0,  
  arrows: true,  
  dots: true,  
  adaptiveHeight: true
});

$('.accordion-header').click(function () {
  $(this).toggleClass('active-header')  
  $(this).next().slideToggle().toggleClass('open-content')  
});


$( '#example4' ).sliderPro({
  width: 992,
  height: 576,
  fade: true,
  arrows: true,
  buttons: false,
  fullScreen: false,
  shuffle: true,
  smallSize: 500,
  mediumSize: 1000,
  largeSize: 3000,
  thumbnailArrows: true,
  autoplay: false,
  breakpoints: {
    1365: {      
      width: 852,
      height: 576
    },
    1199: {
      width: 752,
      height: 576
    },
    1100: {
      width: 652,
      height: 576
    },
    991: {            
      fullWidth: true      
    }
  }
});

$( '#example5' ).sliderPro({
  width: 992,
  height: 576,
  fade: true,
  arrows: true,
  buttons: false,
  fullScreen: false,
  shuffle: true,
  smallSize: 500,
  mediumSize: 1000,
  largeSize: 3000,
  thumbnailArrows: true,
  autoplay: false,
  breakpoints: {
    1365: {      
      width: 852,
      height: 576
    },
    1199: {
      width: 752,
      height: 576
    },
    1100: {
      width: 652,
      height: 576
    },
    991: {            
      fullWidth: true,      
    }
  }
});

/************************************/

/*$('.wrapper').prepend('<span class="eye-3"></span>');
let pg = parseInt(document.location.pathname.match(/\d+/))
$('body').addClass('active').css('background-image', "url('../img/"+pg+".jpg')");
$('body:not(.active)').css('background-image', "unset");

$('.eye-3').click(function (e) {
  e.preventDefault();  
  $('body').toggleClass('active');
  let pg = parseInt(document.location.pathname.match(/\d+/));
  $('body.active').css('background-image', "url('../img/"+pg+".jpg')");
  $('body:not(.active)').css('background-image', "unset");

});*/

/************************************/


function tabs(element) {    
  $(element).find('.tabs__list-item').click(function () {
    $(element).find('.tabs__list-item').removeClass('active');
    $(this).addClass('active');    
    let num = $(this).index();
    $(element).find('.tabs__content-list-item').removeClass('active');
    $(element).find('.tabs__content-list-item').eq(num).addClass('active');    
  });
}


tabs('.ser__tabs');
tabs('.scard-main__tabs');



function popup(openLink, windowEl, closeEl) {  
  $(openLink).click(function(e) {
    e.preventDefault();
    $(windowEl).fadeIn();
    $('body').addClass('ohi');
  });
  $(closeEl).click(function(e) {
    e.preventDefault();
    $(windowEl).fadeOut();
    $('body').removeClass('ohi');
  });
  $('.modal-overlay').click(function () {
    $(this).fadeOut();
    $('body').removeClass('ohi');
  });
  $('.modal-form__block').click(function (e) {
    e.stopPropagation();  
  });
  
}

popup('.link2', '.modal-overlay_2', '.modal-close_2');
popup('.link', '.modal-overlay_1', '.modal-close_1');


$('a[href*=\\#]:not([href=\\#])').click(function () {
  elementClick = $(this).attr("href");
  destination = $(elementClick).offset().top;
  $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination - 85}, 1100);
  return false;
});


$(window).scroll(function(){
  var wt = $(window).scrollTop();  
  var wh = $(window).height();    
  if (wt > 600) {
    $('.serv-arr-up').show(400);
  }
  else {
   $('.serv-arr-up').hide();
 }
});

/**************/

if($('.form__select, .plusform__select-subject').length) {
  $('.form__select, .plusform__select-subject').select2({
    minimumResultsForSearch: -1
  });
}


var mySelect = $('.search-objects__select');
mySelect.fancySelect();


/*$('.search-actions__checkbox').click(function () {
  $('.search-actions__radio')
});*/


$('.search-actions__checkbox').change(function() {
  if(this.checked) {
    $('.search-actions__radio').prop("checked", false)    
  }  
});

$('.search-actions__radio').change(function() {
  if(this.checked) {
    $('.search-actions__checkbox').prop("checked", false)    
  }  
});


$('.accordion-content').addClass('open-content');




}); //ready

