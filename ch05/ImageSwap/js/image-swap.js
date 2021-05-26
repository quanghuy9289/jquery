$(function () {
  // preload images
  $("#image_list a").each(function () {
    var swappedImage = new Image();
    swappedImage.src = $(this).attr("href");
  });

  // setup event handler for link
  $("#image_list a").click(function (evt) {
    // swap image
    $("#image").attr("src", $(this).attr("href"));

    // swap caption
    $("#caption").text($(this).attr("title"));

    // cancel default action of link
    evt.preventDefault(); // cross-browser
  });

  // focus on first thumbnail
  $("li:first-child a").focus();
});
