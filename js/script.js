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


$(document).ready(function(){
  $('.slider-logo').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: ('<i class="fas fa-chevron-left"></i>'),
    nextArrow: ('<i class="fas fa-chevron-right"></i>'),
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 737,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 415,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

    ]
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

    $(".typing").typed({
        strings: [" к Нам", " в туристическое агентство", " Travel Kate's Agency."],
        typeSpeed: 70,
        backDelay: 1500,
        startDelay: 2500,
        loop: true,
        loopCount: 2,
        contentType: 'html',
    });

});

