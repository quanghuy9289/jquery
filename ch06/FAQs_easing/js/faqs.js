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

  $("#faqs h1").animate(
    {
      fontSize: "275%",
      opacity: 1,
      left: 0, // left: "+=175"
    },
    2000,
  );

  // chained animation
  $("#faqs h1").click(function () {
    $(this)
      .animate(
        {
          fontSize: "650%",
          opacity: 1,
          left: "+=275",
        },
        2000,
        "easeInExpo",
      )
      .animate(
        {
          fontSize: "275%",
          left: "-=275",
        },
        1000,
        "easeOutExpo",
      );
  });
});
