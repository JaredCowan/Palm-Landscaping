!(function() {

  $(document).on("ready", function() {

    $('#nav-accordion').dcAccordion({
      eventType:   'click',
      autoClose:   true,
      saveState:   true,
      disableLink: true,
      speed:       'slow',
      showCount:   false,
      autoExpand:  true,
      classExpand: 'dcjq-current-parent'
    });

    $("#sidebar").niceScroll({
      styler:             "fb",
      cursorcolor:        "#ffcc00",
      cursorwidth:        '3',
      cursorborderradius: '10px',
      background:         '#404040',
      spacebarenabled:    false,
      cursorborder:       ''
    });
    
    $('#sidebar .sub-menu > a').click(function () {
      var o    = ($(this).offset()),
          diff = 250 - o.top;
      if (diff>0) {
        $("#sidebar").scrollTo("-="+Math.abs(diff),500);
      } else {
        $("#sidebar").scrollTo("+="+Math.abs(diff),500);
      }
    });

    // sidebar toggle

    $(".toggle-sidebar").on("mousedown", function() {
      var sidebar        = $('#sidebar > ul').is(":visible");
      var $tooltip       = $(".toggle-sidebar");
      var $tooltip_inner = $(".tooltip-inner");

      if (sidebar) {
        var _message = "Open Sidebar";
        $tooltip.attr("data-original-title", _message);
        $tooltip_inner.text(_message);
      } else {
        var _message = "Close Sidebar";
        $tooltip.attr("data-original-title", _message);
        $tooltip_inner.text(_message);
      }
    });

    $(function() {
      function responsiveView() {
        var wSize = $(window).width();
        if (wSize <= 768) {
          $('#container').addClass('sidebar-close');
          $('#sidebar > ul').hide();
        }

        if (wSize > 768) {
          $('#container').removeClass('sidebar-close');
          $('#sidebar > ul').show();
        }
      }
      $(window).on('load', responsiveView);
      $(window).on('resize', responsiveView);
    });

    $('.toggle-sidebar').click(function () {
      var $mainContent = $('#main__site__content');
      if ($('#sidebar > ul').is(":visible") === true) {
        $mainContent.css({
          'margin-left': '0px'
        });
        $('#sidebar').css({
          'margin-left': '-210px'
        });
        $('#sidebar > ul').hide();
        $("#container").addClass("sidebar-closed");
      } else {
        $mainContent.css({
          'margin-left': '210px'
        });
        $('#sidebar > ul').show();
        $('#sidebar').css({
          'margin-left': '0'
        });
        $("#container").removeClass("sidebar-closed");
      }
    });
  });
})(jQuery);
