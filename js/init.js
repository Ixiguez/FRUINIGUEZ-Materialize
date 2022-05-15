(function($) {
  $(function() {
    $(".sidenav").sidenav();

    //Init Slider

    $(".slider").slider({
      fullWidth: true,
      indicators: false,
      height: 500
    });

    //Init Scrollspy
    $(".scrollspy").scrollSpy({});
  }); 
})(jQuery); 
