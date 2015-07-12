!(function($) {
  $(document).ready(function() {
    var $body = $("body");

    if ($body.hasClass("controller-jobs")) {

      var searchOptions = {
        valueNames: [ 'search__job__name', 'search__job__date' ]
      };

      var jobsList = new List('search__jobs', searchOptions);
      var $search  = $(".search");

      $search.on("keyup", function() {
        var $searchGroup = $(".search-group");
        var $searchLabel = $(".search-group label");
        var results      = jobsList.matchingItems;

        if ($search.val().length > 0 && results.length === 0) {
          $searchGroup.addClass("has-error");
          $searchLabel.show();
        } else if (results.length || $search.val().length === 0) {
          $searchGroup.removeClass("has-error");
          $searchLabel.hide();
        }
      });
    }
  });
})(jQuery);
