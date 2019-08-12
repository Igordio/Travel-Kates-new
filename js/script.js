// Smooth scroll blocking
document.addEventListener( 'DOMContentLoaded', function() {
	if ( 'onwheel' in document ) {
		window.onwheel = function( event ) {
			if( typeof( this.RDSmoothScroll ) !== undefined ) {
				try { window.removeEventListener( 'DOMMouseScroll', this.RDSmoothScroll.prototype.onWheel ); } catch( error ) {}
				event.stopPropagation();
			}
		};
	} else if ( 'onmousewheel' in document ) {
		window.onmousewheel= function( event ) {
			if( typeof( this.RDSmoothScroll ) !== undefined ) {
				try { window.removeEventListener( 'onmousewheel', this.RDSmoothScroll.prototype.onWheel ); } catch( error ) {}
				event.stopPropagation();
			}
		};
	}

	try { $('body').unmousewheel(); } catch( error ) {}
});
$(function(){
// IPad/IPhone
  var viewportmeta = document.querySelector && document.querySelector('meta[name="viewport"]'),
  ua = navigator.userAgent,

  gestureStart = function () {viewportmeta.content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";},

  scaleFix = function () {
    if (viewportmeta && /iPhone|iPad/.test(ua) && !/Opera Mini/.test(ua)) {
      viewportmeta.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
      document.addEventListener("gesturestart", gestureStart, false);
    }
  };

  scaleFix();
  // Menu Android
  if(window.orientation!=undefined){
  var regM = /ipod|ipad|iphone/gi,
   result = ua.match(regM)
  if(!result) {
   $('.sf-menu li').each(function(){
    if($(">ul", this)[0]){
     $(">a", this).toggle(
      function(){
       return false;
      },
      function(){
       window.location.href = $(this).attr("href");
      }
     );
    }
   })
  }
 }
});
// var ua=navigator.userAgent.toLocaleLowerCase(),
//  regV = /ipod|ipad|iphone/gi,
//  result = ua.match(regV),
//  userScale="";
// if(!result){
//  userScale=",user-scalable=0"
// }
// document.write('<meta name="viewport" content="width=device-width,initial-scale=1.0'+userScale+'">')
//
// var currentYear = (new Date).getFullYear();
//   $(document).ready(function() {
//   $("#copyright-year").text( (new Date).getFullYear() );
//   });
//
//   $(function(){
//   $('.sf-menu').superfish({autoArrows: true})
// });

$(document).ready(function(){
  $('.slider-logo').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: ('<i class="fas fa-chevron-left"></i>'),
    nextArrow: ('<i class="fas fa-chevron-right"></i>')
  });

  $('#camera_wrap').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: ('<i class="fas fa-chevron-left"></i>'),
    nextArrow: ('<i class="fas fa-chevron-right"></i>')
  });

});
$(window).scroll(function() {
  var height = $(window).scrollTop();
  if(height > 100){
    $('.section__wrap__nav-top').addClass('nav-top-hide');
  } else{
    $('.section__wrap__nav-top').removeClass('nav-top-hide');
  }
});

// $(document).ready(function(){
//   var number = Math.floor((Math.random() * 5) + 0);
//   var number2 = Math.floor((Math.random() * 0) + -5);
//   $(".polaroid:nth-of-type(n+1)").css("transform", "rotate(" + number + "deg)");
//   $(".polaroid:nth-of-type(n+2)").css("transform", "rotate(" + number2 + "deg)");
//
// });

// $(document).ready(function(){
//   $('#camera_wrap').camera({
//     loader: true,
//     pagination: true,
//     minHeight: '444',
//     thumbnails: false,
//     height: '45%',
//     caption: true,
//     navigation: true,
//     fx: 'mosaic'
//   });
//   /*carousel*/
//   var owl=$("#owl");
//   owl.owlCarousel({
//     items : 2, //10 items above 1000px browser width
//     itemsDesktop : [995,2], //5 items between 1000px and 901px
//     itemsDesktopSmall : [767, 2], // betweem 900px and 601px
//     itemsTablet: [700, 2], //2 items between 600 and 0
//     itemsMobile : [479, 1], // itemsMobile disabled - inherit from itemsTablet option
//     navigation : true,
//     pagination : true
//   });
//   $().UItoTop({ easingType: 'easeOutQuart' });
// });
$(document).ready(function() {
  var slider = $(".main-slider");
  slider.attr("dir", "rtl");

  if (slider.length > 0) {
    slider.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: false,
      swipe: false,
      rtl: true,
      speed: 2000,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: false,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            arrows: true,
            prevArrow: '<div class="slick-prev"></div>',
            nextArrow: '<div class="slick-next"></div>'
          }
        }
      ]
    });
  }

  var navigation = $(".navigation-slider");

  if (navigation.length > 0) {
    navigation.slick({
      asNavFor: slider,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      centerMode: false,
      focusOnSelect: false,
      arrows: true,
      vertical: true,
      prevArrow: '<div class="slick-prev"></div>',
      nextArrow: '<div class="slick-next"></div>',
      swipe: false,
      speed: 2000,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: false
    });
  }
}
