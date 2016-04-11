/**
 * @init is function run after loading the page. It is the first function executed.
 *
 * */

var init;
init = function () {
    //The .active class needs to be added to one of the slides. Otherwise, the carousel will not be visible.
    // $('.carousel .item:first').addClass('active');

    //adding carousel avoid using bootstrap data tags for JS events. it get un manageable soon.
    carousel_slider()
    //apply slick slider of featured post
    featured_slider();

    $('.thubmnail').hover(
            function(){
                $(this).find('.caption').slideDown(250); //.fadeIn(250)
            },
            function(){
                $(this).find('.caption').slideUp(250); //.fadeOut(205)
            }
    );
};

function preloader() {
  if (document.images) {
    var img1 = new Image();
    var img2 = new Image();
    var img3 = new Image();
    var img4 = new Image();
    var img5 = new Image();
    var img6 = new Image();
    var img7 = new Image();

    var pathname = window.location.pathname;

    img1.src = pathname + "/assets/images/back.jpg";
    img2.src = pathname + "/assets/images/post/image1.jpg";
    img3.src = pathname + "/assets/images/post/image2.jpg";
    img4.src = pathname + "/assets/images/post/image3.jpg";
    img5.src = pathname + "/assets/images/post/image4.jpg";
    img6.src = pathname + "/assets/images/post/image5.jpg";
    img7.src = pathname + "/assets/images/post/image6.jpg";

    console.log(img7.src);
    
    
  }
}
function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    }
  }
}
addLoadEvent(preloader);

var carousel_slider = function(){
    $('#carousel').slick({
        lazyLoad: 'ondemand',
        autoplay: true,
        autoplaySpeed: 5000,
        adaptiveHeight: true,
        fade: true,
        pauseOnHover: false,
    });
}

var featured_slider = function(){
    $('.lazy').slick({
      lazyLoad: 'ondemand',
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      adaptiveHeight: true,
      arrows: true,
      prevArrow: $('.nvgt#prev'),
      nextArrow: $('.nvgt#next'),
       responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false
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
      ]
    });
}

window.onload = init(); //when dom is loaded. run init function
