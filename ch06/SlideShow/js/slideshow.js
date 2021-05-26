"use strict";
// one way
// $(document).ready(function () {
//   // create an array of the slide images
//   var image,
//     imageCounter = 0,
//     imageCache = [];

//   // preload images
//   $("#slides img").each(function () {
//     image = new Image();
//     image.src = $(this).attr("src");
//     image.title = $(this).attr("alt");
//     imageCache[imageCounter] = image;
//     imageCounter++;
//   });

//   // start slide show
//   imageCounter = 0; // start from first image
//   var nextImage;
//   setInterval(function () {
//     $("#caption").fadeOut(1000);
//     $("#slide").fadeOut(1000, function () {
//       imageCounter = (imageCounter + 1) % imageCache.length;
//       nextImage = imageCache[imageCounter];
//       $("#slide").attr("src", nextImage.src).fadeIn(1000);
//       $("#caption").text(nextImage.title).fadeIn(1000);
//     });
//   }, 3000);
// });

// another way
$(document).ready(function () {
  var nextSlide = $("#slides img:first-child");
  var nextCaption;
  var nextSlideSrc;

  var runSlideShow = function () {
    $("#caption").fadeOut(1000);
    $("#slide").fadeOut(1000, function () {
      // find next slide
      nextSlide = nextSlide.next();
      if (nextSlide.length === 0) {
        nextSlide = $("#slides img:first-child");
      }

      nextSlideSrc = nextSlide.attr("src");
      nextCaption = nextSlide.attr("alt");
      $("#caption").text(nextCaption).fadeIn(1000);
      $("#slide").attr("src", nextSlideSrc).fadeIn(1000);
    });
  };

  // start slide show
  var timer = setInterval(runSlideShow, 3000);

  // start or stop slide show when user click on image
  $("#slide").click(function () {
    if (timer != null) {
      // that mean slide is running
      clearInterval(timer); // stop running
      timer = null;
    } else {
      timer = setInterval(runSlideShow, 3000);
    }
  });
});
