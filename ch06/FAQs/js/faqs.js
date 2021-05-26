"use strict";

$(function () {
  // (document).ready is assumed
  $("#faqs h2").click(function () {
    $(this).toggleClass("minus"); // add or remove minus class
    // if ($(this).attr("class") !== "minus") {
    //   //$(this).next().hide();
    //   $(this).next().fadeOut(500);
    // } else {
    //   //$(this).next().show();
    //   $(this).next().slideDown(500);
    // }

    // using slideToggle for the same effect
    $(this).next().slideToggle(300);
    // set focus on first h2 tag's a tag
    $("#faqs h2").focus();
  });
});
