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

    $(".fileUploader").dropzone({
      url: "/",
      method: "get",
      autoProcessQueue: false,
      dictDefaultMessage: "Drop Files to upload",
      addRemoveLinks: true,
      acceptedFiles: "image/*",
      dictResponseError: "Example Uploader",
      init: function() {
        this.on("addedfile", function(file) {
          $(file.previewElement).addClass("dz-success");
        });

        $('.startFileUpload').on('click', function() {
          $(".upload-modal").modal('toggle');
          $('.dz-hidden-input:file').trigger('click');
        });
      }
    });
  });
})(jQuery);
