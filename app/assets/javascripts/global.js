!(function($) {

  $(document).on("ready", function() {

    $("html, .dropdown-scrollable .dropdown-menu, .has-yellow-scroll").niceScroll({
      styler:             "fb",
      cursorcolor:        "#ffcc00",
      cursorwidth:        '6',
      cursorborderradius: '10px',
      background:         '',
      spacebarenabled:    false,
      cursorborder:       '0',
      zindex:             '9000'
    });

    $("[data-toggle='tooltip']").tooltip();

    setTimeout(function() {
      $(".module").addClass("loaded");
    }, 900);
  });
})(jQuery);
