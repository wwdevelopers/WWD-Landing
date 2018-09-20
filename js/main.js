(function($) {
  "use strict";

  // Remove preload class once page is fully loaded

  $(window).on('load', function() {
    $('body').removeClass('preload');
  });

  // Add class to navigation when scrolling down

  $(window).on('scroll', function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 20) {
      $('.header-main').addClass('fade-in');
    } else {
      $('.header-main').removeClass('fade-in');
    }
  });

  // Add class when mobile navigation icon is clicked

  $('.nav-toggle').on('click', function() {
    $('body').toggleClass('no-scroll');
    $('.header-main').toggleClass('active');
  });

  // Prevent background from scrolling on mobile when navigation is toggled

  $('html, body').on('touchmove', function() {
    e.preventDefault();
  });

  $('#play-video').on('click', function(e){
    e.preventDefault();
    $('#video-overlay').addClass('open');
    $("#video-overlay").append('<iframe width="740" height="416" src="https://player.vimeo.com/video/285473177?title=0&byline=0&portrait=0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
  });
  
  $('.video-overlay, .video-overlay-close').on('click', function(e){
    e.preventDefault();
    close_video();
  });
  
  $(document).keyup(function(e){
    if(e.keyCode === 27) { close_video(); }
  });
  
  function close_video() {
    $('.video-overlay.open').removeClass('open').find('iframe').remove();
  };

})(jQuery);