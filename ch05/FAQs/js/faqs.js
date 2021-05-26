"use strict";

$(function () {
  // (document).ready is assumed
  $("#faqs h2").click(function () {
    $(this).toggleClass("minus"); // add or remove minus class
    if ($(this).attr("class") !== "minus") {
      $(this).next().hide();
    } else {
      $(this).next().show();
    }

    // set focus on first h2 tag's a tag
    $("#faqs h2").focus();
  });
});
