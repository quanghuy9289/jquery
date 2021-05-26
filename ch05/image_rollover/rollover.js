$(document).ready(function () {
  $("#image_rollovers img").each(function () {
    // preload image
    var oldImg = $(this).attr("src");
    var newImg = $(this).attr("id");
    var rolloverImage = new Image();
    rolloverImage.src = newImg;

    // setup rollover event
    $(this).hover(
      // handler for mouseenter event
      function () {
        $(this).attr("src", newImg);
      },
      // handler for mouseleave event
      function () {
        $(this).attr("src", oldImg);
      },
    );
  }); // end each
}); // end ready
