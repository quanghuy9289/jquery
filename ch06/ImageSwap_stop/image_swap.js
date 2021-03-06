$(document).ready(function () {
  // preload images
  $("#image_list a").each(function () {
    var swappedImage = new Image();
    swappedImage.src = $(this).attr("href");
  });

  // set up event handlers for links
  $("#image_list a").hover(
    function (evt) {
      // animate thumbnail
      $(this).stop(true).animate({ top: 15 }, "fast");
      //   $(this).stop(true, true).animate({ top: 15 }, "fast");
      //   $(this).finish().animate({ top: 15 }, "fast");

      // swap image
      var imageURL = $(this).attr("href");
      $("#image").attr("src", imageURL);

      //swap caption
      var caption = $(this).attr("title");
      $("#caption").text(caption);
    },
    function (evt) {
      // animate thumbnail
      $(this).stop(true).animate({ top: 0 }, "fast");
      //$(this).stop(true, true).animate({ top: 0 }, "fast");
      //$(this).finish().animate({ top: 0 }, "fast");
    },
  ); // end hover

  $("#image_list a").click(function (evt) {
    // cancel the default action of the link
    evt.preventDefault(); // jQuery method that's cross-browser compatible
  });

  // move focus to first thumbnail
  $("#image_list li:first-child a img").focus();
}); // end ready
