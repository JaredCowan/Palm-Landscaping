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

    $('#sidebar .sub-menu > a').click(function () {
      var o    = ($(this).offset()),
          diff = 250 - o.top;
      if (diff > 0) {
        $("#sidebar").scrollTo("-=" + Math.abs(diff), 500);
      } else {
        $("#sidebar").scrollTo("+=" + Math.abs(diff), 500);
      }
    });

    var toggleTooltip = function() {
      var sidebar        = $('#sidebar > ul').is(":visible");
      var $tooltip       = $(".toggle-sidebar");
      var $tooltip_inner = $(".tooltip-inner");

      if (!sidebar) {
        var _message = "Open Sidebar";
        $tooltip.attr("data-original-title", _message);
        $tooltip_inner.text(_message);
      } else {
        var _message = "Close Sidebar";
        $tooltip.attr("data-original-title", _message);
        $tooltip_inner.text(_message);
      }
    }

    var toggleSidebar = function() {
      var wSize = $(window).width();
      var $mainContent = $('#main__site__content');

      if (wSize < 768) {
        $('#sidebar > ul').show();
        $('#container').toggleClass('sidebar-close');
      }

      if (wSize >= 768) {
        if ($('#container').hasClass("sidebar-close")) {
          $('#sidebar > ul').show();
          $mainContent.css({
            'margin-left': '210px'
          });
          $('#sidebar').css({
            'margin-left': '0'
          });
          $('#container').removeClass("sidebar-close");
        } else {
          $('#sidebar > ul').hide();
          $mainContent.css({
            'margin-left': '0px'
          });
          $('#sidebar').css({
            'margin-left': '-210px'
          });
          $('#container').addClass("sidebar-close");
        }
      }
    }

    var responsiveView = function() {
      var wSize        = $(window).width();
      var $mainContent = $('#main__site__content');
      // console.log("HYEYYYY");
      if (wSize < 768) {
        $mainContent.attr("style", "");
        $('#container').removeClass('sidebar-close');
        $('#sidebar > ul').hide();
      }

      if (wSize >= 768) {
        $("#sidebar").niceScroll({
          styler:             "fb",
          cursorcolor:        "#ffcc00",
          cursorwidth:        '3',
          cursorborderradius: '10px',
          background:         '#404040',
          spacebarenabled:    false,
          cursorborder:       ''
        });

        $('#container').removeClass('sidebar-close');
        $('#sidebar > ul').show();
      }
    }

    $(window).on("load resize", function() {
      responsiveView();
      toggleTooltip();
    });

    $('.toggle-sidebar').on("click", function() {
      toggleSidebar();
      toggleTooltip();
    });
  });
})(jQuery);
