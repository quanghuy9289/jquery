"use strict";

$(function () {
  // (document).ready is assumed
  $("#faqs h2").click(function () {
    $(this).toggleClass("minus"); // add or remove minus class
    if ($(this).attr("class") == "minus") {
      $(this).next().slideDown(1000, "easeOutBounce");
    } else {
      $(this).next().slideUp(1000, "easeInBounce");
    }
  });

  // set focus on first h2 tag's a tag
  $("#faqs h2").focus();

  // $("#faqs h1").animate(
  //   {
  //     fontSize: "275%",
  //     opacity: 1,
  //     left: 0, // left: "+=175"
  //   },
  //   {
  //     duration: 2000,
  //     specialEasing: {
  //       fontSize: "easeInExpo",
  //       left: "easeOutExpo",
  //     },
  //     complete: function () {
  //       $("#faqs h2").next().fadeIn(1000).fadeOut(1000);
  //     },
  //   },
  // );

  $("#faqs h1").animate(
    {
      fontSize: ["275%", "easeInExpo"],
      opacity: [1, "swing"],
      left: ["+=175", "easeOutExpo"],
    },
    2000,
  );
});
