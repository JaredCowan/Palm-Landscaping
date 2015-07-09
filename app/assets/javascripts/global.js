!(function($) {

  $(document).on("ready", function() {
    $("html").niceScroll({
      styler:             "fb",
      cursorcolor:        "#ffcc00",
      cursorwidth:        '6',
      cursorborderradius: '10px',
      background:         '#404040',
      spacebarenabled:    false,
      cursorborder:       '',
      zindex:             '1000'
    });
  });

})(jQuery);
