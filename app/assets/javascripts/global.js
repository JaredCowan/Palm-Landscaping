!(function($) {

  $(document).on("ready", function() {

    $("html, .dropdown-scrollable .dropdown-menu").niceScroll({
      styler:             "fb",
      cursorcolor:        "#ffcc00",
      cursorwidth:        '6',
      cursorborderradius: '10px',
      background:         '',
      spacebarenabled:    false,
      cursorborder:       '0',
      zindex:             '1000'
    });

    $("[data-toggle='tooltip']").tooltip();
  });

})(jQuery);
