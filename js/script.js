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

  $('.single-item').slick({
    arrows: false,
    autoplay: true,
    dots: false,
    centerMode: false,
    slidesToShow: 1,
    lazyLoad: 'progressive',
    speed: 900
  });
  // next button
  $('.next-btn').click(function() {
    $('.single-item').slick('slickNext');
  });

// previous button
  $('.prev-btn').click(function() {
    $('.single-item').slick('slickPrev');
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

// $(document).ready(function() {
//
//     var $slider = $(".slider"),
//         $slideBGs = $(".slide__bg"),
//         diff = 0,
//         curSlide = 0,
//         numOfSlides = $(".slide").length-1,
//         animating = false,
//         animTime = 500,
//         autoSlideTimeout,
//         autoSlideDelay = 6000,
//         $pagination = $(".slider-pagi");
//
//     function createBullets() {
//         for (var i = 0; i < numOfSlides+1; i++) {
//             var $li = $("<li class='slider-pagi__elem'></li>");
//             $li.addClass("slider-pagi__elem-"+i).data("page", i);
//             if (!i) $li.addClass("active");
//             $pagination.append($li);
//         }
//     };
//
//     createBullets();
//
//     function manageControls() {
//         $(".slider-control").removeClass("inactive");
//         if (!curSlide) $(".slider-control.left").addClass("inactive");
//         if (curSlide === numOfSlides) $(".slider-control.right").addClass("inactive");
//     };
//
//     function autoSlide() {
//         autoSlideTimeout = setTimeout(function() {
//             curSlide++;
//             if (curSlide > numOfSlides) curSlide = 0;
//             changeSlides();
//         }, autoSlideDelay);
//     };
//
//     autoSlide();
//
//     function changeSlides(instant) {
//         if (!instant) {
//             animating = true;
//             manageControls();
//             $slider.addClass("animating");
//             $slider.css("top");
//             $(".slide").removeClass("active");
//             $(".slide-"+curSlide).addClass("active");
//             setTimeout(function() {
//                 $slider.removeClass("animating");
//                 animating = false;
//             }, animTime);
//         }
//         window.clearTimeout(autoSlideTimeout);
//         $(".slider-pagi__elem").removeClass("active");
//         $(".slider-pagi__elem-"+curSlide).addClass("active");
//         $slider.css("transform", "translate3d("+ -curSlide*100 +"%,0,0)");
//         $slideBGs.css("transform", "translate3d("+ curSlide*50 +"%,0,0)");
//         diff = 0;
//         autoSlide();
//     }
//
//     function navigateLeft() {
//         if (animating) return;
//         if (curSlide > 0) curSlide--;
//         changeSlides();
//     }
//
//     function navigateRight() {
//         if (animating) return;
//         if (curSlide < numOfSlides) curSlide++;
//         changeSlides();
//     }
//
//     $(document).on("mousedown touchstart", ".slider", function(e) {
//         if (animating) return;
//         window.clearTimeout(autoSlideTimeout);
//         var startX = e.pageX || e.originalEvent.touches[0].pageX,
//             winW = $(window).width();
//         diff = 0;
//
//         $(document).on("mousemove touchmove", function(e) {
//             var x = e.pageX || e.originalEvent.touches[0].pageX;
//             diff = (startX - x) / winW * 70;
//             if ((!curSlide && diff < 0) || (curSlide === numOfSlides && diff > 0)) diff /= 2;
//             $slider.css("transform", "translate3d("+ (-curSlide*100 - diff) +"%,0,0)");
//             $slideBGs.css("transform", "translate3d("+ (curSlide*50 + diff/2) +"%,0,0)");
//         });
//     });
//
//     $(document).on("mouseup touchend", function(e) {
//         $(document).off("mousemove touchmove");
//         if (animating) return;
//         if (!diff) {
//             changeSlides(true);
//             return;
//         }
//         if (diff > -8 && diff < 8) {
//             changeSlides();
//             return;
//         }
//         if (diff <= -8) {
//             navigateLeft();
//         }
//         if (diff >= 8) {
//             navigateRight();
//         }
//     });
//
//     $(document).on("click", ".slider-control", function() {
//         if ($(this).hasClass("left")) {
//             navigateLeft();
//         } else {
//             navigateRight();
//         }
//     });
//
//     $(document).on("click", ".slider-pagi__elem", function() {
//         curSlide = $(this).data("page");
//         changeSlides();
//     });
//
// });

$(document).ready(function() {

    document.getElementById("outer3").addEventListener("click", toggleState3);

    function toggleState3() {
        let galleryView = document.getElementById("galleryView")
        let tilesView = document.getElementById("tilesView")
        let outer = document.getElementById("outer3");
        let slider = document.getElementById("slider3");
        let tilesContainer = document.getElementById("tilesContainer");
        if (slider.classList.contains("active")) {
            slider.classList.remove("active");
            outer.classList.remove("outerActive");
            galleryView.style.display = "flex";
            tilesView.style.display = "none";

            while (tilesContainer.hasChildNodes()) {
                tilesContainer.removeChild(tilesContainer.firstChild)
            }
        } else {
            slider.classList.add("active");
            outer.classList.add("outerActive");
            galleryView.style.display = "none";
            tilesView.style.display = "flex";

            for (let i = 0; i < imgObject.length - 1; i++) {
                let tileItem = document.createElement("div");
                tileItem.classList.add("tileItem");
                tileItem.style.background = "url(" + imgObject[i] + ")";
                tileItem.style.backgroundSize = "contain";
                tilesContainer.appendChild(tileItem);
            }
        }
        ;
    }

    let imgObject = [
        "https://placeimg.com/450/450/any",
        "https://placeimg.com/450/450/animals",
        "https://placeimg.com/450/450/architecture",
        "https://placeimg.com/450/450/nature",
        "https://placeimg.com/450/450/people",
        "https://placeimg.com/450/450/tech",
        "https://picsum.photos/id/1/450/450",
        "https://picsum.photos/id/8/450/450",
        "https://picsum.photos/id/12/450/450",
        "https://picsum.photos/id/15/450/450",
        "https://picsum.photos/id/5/450/450",
    ];

    let mainImg = 0;
    let prevImg = imgObject.length - 1;
    let nextImg = 1;

    function loadGallery() {

        let mainView = document.getElementById("mainView");
        mainView.style.background = "url(" + imgObject[mainImg] + ")";

        let leftView = document.getElementById("leftView");
        leftView.style.background = "url(" + imgObject[prevImg] + ")";

        let rightView = document.getElementById("rightView");
        rightView.style.background = "url(" + imgObject[nextImg] + ")";

        let linkTag = document.getElementById("linkTag")
        linkTag.href = imgObject[mainImg];

    };

    function scrollRight() {

        prevImg = mainImg;
        mainImg = nextImg;
        if (nextImg >= (imgObject.length - 1)) {
            nextImg = 0;
        } else {
            nextImg++;
        }
        ;
        loadGallery();
    };

    function scrollLeft() {
        nextImg = mainImg
        mainImg = prevImg;

        if (prevImg === 0) {
            prevImg = imgObject.length - 1;
        } else {
            prevImg--;
        }
        ;
        loadGallery();
    };

    document.getElementById("navRight").addEventListener("click", scrollRight);
    document.getElementById("navLeft").addEventListener("click", scrollLeft);
    document.getElementById("rightView").addEventListener("click", scrollRight);
    document.getElementById("leftView").addEventListener("click", scrollLeft);
    document.addEventListener('keyup', function (e) {
        if (e.keyCode === 37) {
            scrollLeft();
        } else if (e.keyCode === 39) {
            scrollRight();
        }
    });

    loadGallery();

})