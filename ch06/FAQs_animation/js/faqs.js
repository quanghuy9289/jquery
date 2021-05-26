"use strict";

$(function () {
  // (document).ready is assumed
  $("#faqs h2").click(function () {
    $(this).toggleClass("minus"); // add or remove minus class
    // using slideToggle for the same effect
    $(this).next().slideToggle(300);
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
  // $("#faqs h1").click(function () {
  //   $(this)
  //     .animate(
  //       {
  //         fontSize: "650%",
  //         opacity: 1,
  //         left: "+=275",
  //       },
  //       2000,
  //     )
  //     .animate(
  //       {
  //         fontSize: "275%",
  //         left: "-=275",
  //       },
  //       1000,
  //     );
  // });

  // queued animation
  // $("#faqs h1").click(function () {
  //   $(this).animate(
  //     {
  //       fontSize: "650%",
  //       opacity: 1,
  //       left: "+=275",
  //     },
  //     2000,
  //   );
  //   $(this).animate(
  //     {
  //       fontSize: "275%",
  //       left: "-=275",
  //     },
  //     1000,
  //   );
  // });

  // animation in callback
  $("#faqs h1").click(function () {
    $(this).animate(
      {
        fontSize: "650%",
        opacity: 1,
        left: "+=275",
      },
      2000,
      function () {
        $(this).animate(
          {
            fontSize: "275%",
            left: "-=275",
          },
          1000,
        );
      },
    );
  });
});
