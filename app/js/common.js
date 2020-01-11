 // Smooth scroll to anchor

 $('.scroll').click(function(){
  $('html, body').animate({
    scrollTop: $( $.attr(this, 'href') ).offset().top
  }, 1000);
  return false;
});


//  INPUT TEL MASK
jQuery(function($){
 $("input[type='tel']").mask("+38 (999) 999-9999");
});


// Scroll BAR
$(window).scroll(function() {
  // calculate the percentage the user has scrolled down the page
  var scrollPercent = 100 * $(window).scrollTop() / ($(document).height() - $(window).height());

  $('.bar-long').css('width', scrollPercent +"%"  );

});


//YOUTUBE
$(function() {
  $(".youtube").each(function() {
    $(this).css('background-image', 'url(http://i.ytimg.com/vi/' + this.id + '/sddefault.jpg)');

    $(this).append($('<div/>', {'class': 'play'}));

    $(document).delegate('#'+this.id, 'click', function() {
      var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1";
      if ($(this).data('params')) iframe_url+='&'+$(this).data('params');

      var iframe = $('<iframe/>', {'frameborder': '0', 'src': iframe_url, 'width': $(this).width(), 'height': $(this).height() })

      $(this).replaceWith(iframe);
    });
  });
});

//  UP BUTTON
$( document ).ready(function() {
  $('#scrollup img').mouseover( function(){
    $( this ).animate({opacity: 0.65},100);
  }).mouseout( function(){
    $( this ).animate({opacity: 1},100);
  });

  $(window).scroll(function(){
    if ( $(document).scrollTop() > 0 ) {
      $('#scrollup').fadeIn('slow');
    } else {
      $('#scrollup').fadeOut('slow');
    }
  });

  $('#scrollup').click(function() {
    $('body,html').animate({scrollTop:0},1000);
  });
});

// PREVENT SCROLLING

$('.md-trigger').click(function() {
  $("body").addClass('unscroll');
});

$('.md-close').click(function() {
  $("body").removeClass('unscroll');
});

$('.md-overlay').click(function() {
  $("body").removeClass('unscroll');
});


//Sliders

$('.slider').slick({
  slidesToShow: 1,
  dots: true,
  arrows: false,
  infinite: true,
  slidesToScroll: 1,
  fade: true,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});